const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'noreplytrackit98@gmail.com',
    pass: 'nfkyirhkalqckdop'
  }
});

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'noreplytrackit98@gmail.com',
    pass: 'nfkyirhkalqckdop'
  }
});

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.login(email, password)
    let userType = user.userType;
    let rollNo = user.rollNo;
    let shopName = user.shopName;

    // create a token
    const token = createToken(user._id)

    res.status(200).json({ email, token, userType, rollNo, shopName })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// signup a user
const signupUser = async (req, res) => {
  const { email, password, userType, rollNo, shopName } = req.body

  try {
    const user = await User.signup(email, password, userType, rollNo, shopName)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({ email, token, userType, rollNo, shopName })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getOtp = async (req, res) => {
  // console.log(req.body)
  const { otp, email } = req.body
  console.log(otp);
  // console.log(email);

  try {

    var mailOptions = {
      from: 'noreplytrackit98@gmail.com',
      to: email, 
      subject: "Validation OTP from TrackIT",
      html: `Hello,<br> Please find below your requested OTP: <br> <h1>${otp}</h1><br>regards <br> Customer Care,<br>TrackIT`
    };

    // transporter.sendMail(mailOptions, function (error) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log('Email sent to: ' + email);
    //   }
    // });

    res.status(200).json("OK")
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

//updatePassword
const updatePassword = async(req,res) => {
  const {email,password} = req.body;
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password,salt)
  const opts = { new: true };
  try{

    const user = await User.findOneAndUpdate({email:email},{
      password: hash,
    },opts)
      res.status(200).json("OK")
      // console.log(user)
    // cons
  }
  catch(error){
     res.status.json({error: error.message})
  }

}

module.exports = { signupUser, loginUser, getOtp , updatePassword}
