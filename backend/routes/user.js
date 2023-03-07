const express = require('express')

// controller functions
const { loginUser, signupUser, getOtp } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

//to get otp
router.post('/signup/otp', getOtp)


module.exports = router