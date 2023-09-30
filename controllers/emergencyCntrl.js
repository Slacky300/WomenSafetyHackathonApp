const asyncHandler = require("express-async-handler");
let pincode;
let formattedAddress;
const getemergencyCntrl = asyncHandler(async (req, res) => {
  // ----------------------------fetching-pin- api--------------------
  const pinurl =
    "https://apis.mapmyindia.com/advancedmaps/v1/e06abc40ab1a2cb7d082646670f051b7/rev_geocode?lat=19.385591&lng=72.829019";
  async function getData() {
    const response = await fetch(pinurl);
    const jsonResponse = await response.json();
    //   console.log(jsonResponse);
    pincode = jsonResponse.results[0].pincode;
    formattedAddress = jsonResponse.results[0].formatted_address;
  }
  getData().then(() => console.log("api data is", pincode, formattedAddress));
  res.send(`your pin is${pincode} and formatted address is${formattedAddress}`);

  // ---------------------------------------fetching-Pin-api-------------------------------------------------------
});
module.exports = { getemergencyCntrl };
