const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: "email is required",
  },
  password: {
    type: String,
    trim: true,
    unique: true,
    required: "password is required",
  },
  confirmpassword: {
    type: String,
    trim: true,
    unique: true,
  },
  tc: {
    type: Boolean,
    required: "please check term condition",
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
