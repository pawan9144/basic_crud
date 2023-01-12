const mongoose = require("mongoose");
const schema = mongoose.Schema;

const otpSchema = new schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: "email is required",
  },
  code: {
    type: String,
    trim: true,
    unique: true,
    required: "Otp is required",
  },
  expireIn: {
    type: Number,
  },
});

const Otp = mongoose.model("OTP", otpSchema);
module.exports = Otp;
