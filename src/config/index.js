require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  EMAIL_HOST: process.env.EMAIL_HOST,
  EMAIL_PORT: process.env.EMAIL_PORT,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
  EMAIL_FROM: process.env.EMAIL_FROM,
  accountSid: process.env.TWILIO_ACCOUNT_SID, // Your Account SID from www.twilio.com/console
  authToken: process.env.TWILIO_AUTH_TOKEN, // Your Auth Token from www.twilio.com/console
  JWT_SECRET: process.env.JWT_SECRET,
  ORIGIN: process.env.ORIGIN,

  FAST2SMS: process.env.FAST2SMS,
  ADMIN_PHONE: process.env.ADMIN_PHONE,
};
