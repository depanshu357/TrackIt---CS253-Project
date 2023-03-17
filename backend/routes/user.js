const express = require('express')

// controller functions
<<<<<<< HEAD
const { loginUser, signupUser, getOtp,updatePassword } = require('../controllers/userController')
=======
const { loginUser, signupUser, getOtp } = require('../controllers/userController')
>>>>>>> 24265d28e8e98792efa3236e125f874d74ff5076

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

//to get otp
router.post('/signup/otp', getOtp)

<<<<<<< HEAD
//to change password
router.post('/signup/updatePassword',updatePassword)

=======
>>>>>>> 24265d28e8e98792efa3236e125f874d74ff5076

module.exports = router