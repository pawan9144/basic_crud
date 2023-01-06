require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
};
