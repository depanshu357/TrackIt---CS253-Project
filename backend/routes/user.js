const express = require('express')

// controller functions
const { loginUser, signupUser, getOtp,updatePassword } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

//to get otp
router.post('/signup/otp', getOtp)

//to change password
router.post('/signup/updatePassword',updatePassword)


module.exports = router