const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config");
const User = require("../model/user");

const checkUserAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log("🚀 ~ file: Auth.js:7 ~ checkUserAuth ~ authorization", authorization)
  
  if (!authorization && !authorization.startsWith("Bearer")) {
    return res.json({
      status: "failed",
      message: "No Token",
    });
  }
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      const token = authorization.split(" ")[1];
      //Verify Token
      const { userID } = jwt.verify(token, JWT_SECRET_KEY);
      //Get User From Token
      const user = await User.findById(userID).select("-password");
      if (!user) {
        throw new Error("Un authorised");
      }
      req.user = user;
      next();
    } catch (error) {
      console.log(error);
      res.json({
        status: "failed",
        message: "Unauthorized User",
      });
    }
  }
};

module.exports = checkUserAuth;
