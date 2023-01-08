require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  EMAIL_HOST:process.env.EMAIL_HOST,
  EMAIL_PORT:process.env.EMAIL_PORT,
  EMAIL_USER:process.env.EMAIL_USER,
  EMAIL_PASS:process.env.EMAIL_PASS,
  EMAIL_FROM:process.env.EMAIL_FROM,
};


