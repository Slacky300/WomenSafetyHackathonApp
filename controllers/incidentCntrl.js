const asyncHandler = require('express-async-handler');
const { Incident } = require('../models/incidentRptModel');
const { User } = require('../models/userModel')

const fs = require('fs');
const path = require('path')
const AWS = require('aws-sdk')
require('dotenv').config();

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-2'
})

const s3 = new AWS.S3();

const addIncident = asyncHandler(async (req, res) => {

    const { userId, report, pincodeOfIncident, mimeType } = req.body;
    

    const user = await User.findById(userId);
    if(!user){
        res.status(404).json({message: "user not found"})
    }
    const note = req.file
    if(note){
        console.log("ehehe")
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: "fileKey",
            Body: fs.createReadStream(req.file.path),
            ContentType: mimeType
        }
        const s3Response = await s3.upload(params).promise();
        const incFile = s3Response.Location;
        console.log(incFile)
       

        const incident = await Incident.create({
            user,
            report,
            pincodeOfIncident,
            meidaSt: incFile
        })



        if(incident){
            res.status(201).json({message: "Incident reported successfully"})
        }else{
            res.status(500).json({message: "Something went wrong"})
        }
    }else{
        console.log("djfekdjfdk")
        const incident = await Incident.create({
            user,
            report,
            pincodeOfIncident
        })

        if(incident){
            res.status(201).json({message: "Incident reported successfully"})
        }else{
            res.status(500).json({message: "Something went wrong"})
        }
    }

});

module.exports = {addIncident}