const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menSchema = new Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: Date,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  score: {
    type: Number,
    trim: true,
  },
  event: {
    type: String,
    default: "100m",
  },
});

// We Are creating a New Collection

const MensRanking = mongoose.model("MenRanking", menSchema);

module.exports = MensRanking;
