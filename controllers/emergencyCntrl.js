const asyncHandler = require("express-async-handler");
const {User} = require('../models/userModel')
const {sendHelpEmail} = require('../utils/email')
const axios = require('axios')
let pincode;
let formattedAddress;


const getData = async(url) => {

  try{
    
    let {data} = await axios.get(url)
    
    return data
  }catch(e){
    console.log(e.message);
  }
}

const sendemergencyCntrl = asyncHandler(async (req, res) => {
  
  const {userId, lat, long} = req.body;
  if(!lat || !long){
    res.status(403).json({message: "latitude or longitude is missing"})
  }
  const resp = await getData(`https://apis.mapmyindia.com/advancedmaps/v1/efd1bc9e76b7a36cb990af517a48f3c3/rev_geocode?lat=${lat}&lng=${long}`)
  pincode = resp.results[0].pincode;
  formattedAddress = resp.results[0].formatted_address;
  const  user = await User.findById(userId);
  if(!user){
    res.status(404).json({message: "User not found"})
  }
  await sendHelpEmail(user.emergencyMail, lat, long , user.uname, pincode,formattedAddress);
  res.status(200).json({message: "Sent an SOS for help"})
  

  // ---------------------------------------fetching-Pin-api-------------------------------------------------------
});
module.exports = { sendemergencyCntrl };
