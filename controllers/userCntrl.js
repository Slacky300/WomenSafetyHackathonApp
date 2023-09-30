const asyncHandler = require('express-async-handler');
const {User} = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const userInfo = asyncHandler(async (req,res) => {
    res.json(req.user);
});

const registerUser = asyncHandler(async(req,res)=>{

    const {name, email, password, phone,emergencyNo, emergencyMail, pincode} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory baby");
    }

    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error(`User with ${email} already exist`);
    }
    const verificationToken = generateverificationToken(email);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = User.create({
        name,
        email,
        password: hashedPassword,
        verificationToken,
        phone,
        emergencyMail,
        emergencyNo,
        pincode

    });

    await sendVerificationEmail(email, verificationToken);

    res.json({ message: 'Registration successful. Please check your email for verification.' });


    if(user){
        res.status(201).json({_id: user.id, email: user.email});
    }else{
        res.status(500);
        throw new Error("Something went wrong");
    }
});

const verifyemail = async (req, res) => {
    try {
        const tokenId = req.params.tokenId;
        const user = await User.findOne({ verificationToken: tokenId });

        if (!user) {
            return res.status(404).json({ error: 'Invalid verification token.' });
        }

        user.isVerified = true;
        user.verificationToken = null;
        await user.save();

        const congratulationContent = successFullVerification();

        res.send(congratulationContent);

    } catch (error) {
        res.status(500).json({ error: 'An error occurred during email verification.' });
        console.log(error);
    }
};

const loginUser  = asyncHandler(async (req,res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const user = await User.findOne({email});
    
    if(!user){
        res.status(404);
        throw new Error(`User with this ${email} does not exist`);
    }

    if(user && await bcrypt.compare(password, user.password)){
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "20m"});
        res.status(200).json({accessToken});
    }else{
        res.status(400);
        throw new Error("Password is not valid");
    }

});








       



module.exports = {
    userInfo,
    registerUser,
    loginUser,
    verifyemail

}