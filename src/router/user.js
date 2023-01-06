const express = require("express");
const {
  CHANGE_PASSWORD,
  LOGIN,
  REGISTER,
} = require("../constants/path.constant");
const {
  registerUser,
  loginUser,
  changePassword,
} = require("../controller/user");
const checkUserAuth = require("../middleware/Auth");
const { signupValidation } = require("../validation/user");
const router = express.Router();

router.post(REGISTER, signupValidation, registerUser);
router.post(LOGIN, loginUser);
router.post(CHANGE_PASSWORD, checkUserAuth, changePassword);

module.exports = router;
