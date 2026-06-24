const express = require("express");
const { register, login, sendVerifyOtp, verifyEmail, sendResetOtp, isAuthenticated, resetPassword, logout } = require("../controllers/authController");
const userAuth = require('../middleware/userAuth.js')


const router = express.Router();

router.post('/register', register);
router.post('/login', login  );
router.post('/logout', logout  );
router.post('/send-verify-otp', userAuth, sendVerifyOtp);
router.post('/verify-email', userAuth, verifyEmail);
router.get('/is-auth', userAuth, isAuthenticated);
router.post('/send-reset-otp', sendResetOtp);
router.post('/reset-password', resetPassword);


module.exports = router;
