const mongoose = require("mongoose");
const { DATABASE_URL } = require("../config");
mongoose.set("strictQuery", true);
const ConnectDB = async () => {
  try {
    const DB_OPTIONS = {
      dbName: "BasicCrud",
    };
    await mongoose
      .connect(DATABASE_URL, DB_OPTIONS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("database connected succesfully");
      });
  } catch (e) {
    console.log(e);
    console.log("database can not connected");
  }
};
module.exports = ConnectDB;
