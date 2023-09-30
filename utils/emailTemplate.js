const gmailContent = (verificationToken) => {
    return `
      <h1 style="color: #008080; font-family: 'Arial', sans-serif; text-align: center;">Email Verification</h1>
      
      <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px;">
        <p style="font-size: 16px; font-family: 'Arial', sans-serif; color: #444; text-align: center;">Click the button below to verify your email:</p>
        <div style="text-align: center; margin-top: 20px;">
          <a href="${process.env.BACKEND_URL}/api/v1/users/emailverify/${verificationToken}" style="display: inline-block; background-color: #008080; color: #fff; font-size: 18px; font-family: 'Arial', sans-serif; text-decoration: none; padding: 10px 20px; border-radius: 5px; border: 2px solid #008080; transition: background-color 0.3s ease-in-out;">
            Verify Email
          </a>
        </div>
      </div>
      `;
  
  }

  const successFullVerification = () => {
    return `
    <h1 style="color: #008080; font-family: 'Arial', sans-serif; text-align: center;">Congratulations!</h1>
    <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px;">
      <p style="font-size: 16px; font-family: 'Arial', sans-serif; color: #444; text-align: center;">You have successfully verified your email.</p>
      <div style="text-align: center; margin-top: 20px;">
        <a href="${process.env.BACKEND_URL}/api/v1/users/login" style="display: inline-block; background-color: #008080; color: #fff; font-size: 18px; font-family: 'Arial', sans-serif; text-decoration: none; padding: 10px 20px; border-radius: 5px; border: 2px solid #008080; transition: background-color 0.3s ease-in-out;">
          Go to Home Page
        </a>
      </div>
    </div>
  `;
  }
  

const mapLocation = (lat,long,username,pincode,formatted_address) => `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <style>
        .abc {
            background-color: #d3d3d3;
            max-width: 768px;
            color: black;

        }

        b{
            color: red;
        }
    </style>
    <center>
        <div class="abc">
            <h1 style="color: red;">Alert</h1> <br />
            <p>Hey user you are recieving this mail because one of your close member added you as emergency contact</p>
            <p> <b>${username}</b> seems to be in danger as he/she has triggered alarm<br /><br /> <b>${username}</b> sent an emergency message to you at <b>11:00 am</b></p>
            <p></p>
            <br/>
            <p>The Location from where alert was sent is :</p>

            <p>FORMATED ADDRESS: ${formatted_address}</p>
            <p>POSTAL CODE : ${pincode}</p>

            <a style="text-decoration: none" href="https://maps.google.com/maps?q=${long},${lat}&hl=en&z=14&amp"><button style="width: 50px; height: 40px; padding: 10px">Help Her!!</button></a>
            <br/>
            <br/>
        </div>
    </center>

</body>

</html>`

module.exports = {gmailContent, successFullVerification,mapLocation}