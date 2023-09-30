const mongoose = require("mongoose");


const UserSchema = mongoose.Schema(
    {
       
        fname: {
            type: String,
            required: true
            
        },
        lname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: [true, "This email is already in use"],
        },
        profile: {
            type: String
        },
        phoneNo: {
            type: String,
            unique: [true, "This phone number is already in use"],
        },
        gender: {
            type: String,
            enum: ["male", "female"],
        },       
        isVerified: {
            type: Boolean,
            default: false
        },
        verificationToken: {
            type: String,
            default: null
        },
       
    },
    { timestamps: true }
);




const User = mongoose.model("User", UserSchema);
module.exports = { User, UserSchema };