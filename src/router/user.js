const express = require("express");
const {
  CHANGE_PASSWORD,
  LOGIN,
  REGISTER,
  LOGGED_USER,
  FORGET_PASSWORD,
  SEND_USER_EMAIL,
} = require("../constants/path.constant");
const {
  registerUser,
  loginUser,
  changePassword,
  loggedUser,
  senUserPasswordResetEmail,
  userPasswordReset,
} = require("../controller/user");
const checkUserAuth = require("../middleware/Auth");
const { signupValidation } = require("../validation/user");
const router = express.Router();

router.post(REGISTER, signupValidation, registerUser);
router.post(LOGIN, loginUser);
router.post(CHANGE_PASSWORD, checkUserAuth, changePassword);
router.get(LOGGED_USER, checkUserAuth, loggedUser);
router.post(SEND_USER_EMAIL,senUserPasswordResetEmail);
router.post(FORGET_PASSWORD,userPasswordReset)

module.exports = router;
