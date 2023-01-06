const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config");
const { findByIdAndUpdate } = require("../model/user");

exports.registerUser = async (req, res) => {
  const { name, email, password, confirmpassword, tc } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    return res.send({
      status: "failed",
      message: "Email is allready exist",
    });
  }
  if (!name && !email && !password && !confirmpassword && !tc) {
    return res.json({
      message: "All field is required !",
      success: false,
    });
  }
  if (password != confirmpassword) {
    return res.json({
      message: "password and confirm password doesn't match",
      success: false,
    });
  }
  try {
    // Password Hashing
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    const createObj = {
      name,
      email,
      password: hashpassword,
      ...(tc && { tc }),
    };
    const userData = await User.create(createObj);
    //find single user
    const saved_user = await User.findOne({ email: email });
    // GEnerate JWT token
    const token = jwt.sign({ userID: saved_user._id }, JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    return res.status(201).json({
      data: { ...userData, token: token },
      message: "Register successfull",
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    return res.json({
      message: "one of the filed is required(password , email)",
      success: false,
    });
  }
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.send({
      status: "failed",
      message: "You are not registered User",
    });
  }
  try {
    // Password Hashing
    const isMatch = await bcrypt.compare(password, user.password);
    if (user.email === email && isMatch) {
      // Generate JWT token
      const token = jwt.sign({ userID: user._id }, JWT_SECRET_KEY, {
        expiresIn: "1d",
      });
      return res.json({
        token: token,
        message: "login Successfully",
      });
    }
    return res.json({
      message: "Email && password is not valid ",
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

exports.changePassword = async (req, res) => {
  const { password, confirmPassword } = req.body;
  const user = req.user;
  if (!confirmPassword && !password) {
    return res.json({
      message: "one of the filed is required(password , confirmPassword)",
      success: false,
    });
  }
  if (password != confirmPassword) {
    return res.json({
      message: "password and confirm password doesn't match",
      success: false,
    });
  }
  try {
    // Password Hashing
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(confirmPassword, salt);
    await User.findByIdAndUpdate(user._id, {
      $set: {
        password: hashpassword,
      },
    });
    // Generate JWT token
    const token = jwt.sign({ userID: user._id }, JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    return res.json({
      token: token,
      message: "password change Successfully",
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

exports.loggedUser = async (req, res) => {
  res.json({
    user: req.user,
  });
};
