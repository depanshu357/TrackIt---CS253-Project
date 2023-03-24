const express = require('express')

// controller functions
const { loginUser, signupUser, getOtp,updatePassword,setBudget } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

//to get otp
router.post('/signup/otp', getOtp)

//to change password
router.post('/signup/updatePassword',updatePassword)

//to set budget
router.post('/setBudget',setBudget)


module.exports = router