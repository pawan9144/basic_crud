const express = require("express");
const {
  CHANGE_PASSWORD,
  LOGIN,
  REGISTER,
  LOGGED_USER,
  FORGET_PASSWORD,
  SEND_USER_EMAIL,
  RESEND_OTP,
  VERIFY_OTP,
} = require("../constants/path.constant");
const {
  registerUser,
  loginUser,
  changePassword,
  loggedUser,
  senUserPasswordResetEmail,
  userPasswordReset,
  verifyOtp,
  resendOtp,
} = require("../controller/user");
//Authentication
const checkUserAuth = require("../middleware/Auth");
//validation
const { signupValidation } = require("../validation/user");
// router
const router = express.Router();
//SignUp User
router.post(REGISTER, signupValidation, registerUser);
//Login User
router.post(LOGIN, loginUser);
//Change Password !
router.post(CHANGE_PASSWORD, checkUserAuth, changePassword);
// Logged User Detail
router.get(LOGGED_USER, checkUserAuth, loggedUser);
// send User Mail with otp
router.post(SEND_USER_EMAIL, senUserPasswordResetEmail);
//Forget Password
router.post(FORGET_PASSWORD, userPasswordReset);
//Resend Otp
router.post(RESEND_OTP, resendOtp);
//Verify Otp
router.post(VERIFY_OTP, verifyOtp);

module.exports = router;
