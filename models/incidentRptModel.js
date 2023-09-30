const mongoose = require("mongoose");

const IncidentSchema = mongoose.Schema({


    user:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    meidaSt:{
        type:String,

    },
    pincodeOfIncident:{
        type: String,
        required: [true,"Pincode required"]
    },
    report:{
        type: String,
        required: [true,"Abstract required"]
    }
},
    {timestamps: true}
);
const Incident = mongoose.model('Incident',IncidentSchema);
module.exports = {Incident}