const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./db/conn");
const { port } = require("./config");
const userRouters = require("./router/user");

app.use(express.json());
app.use(cors());
connectDb();

app.get("/", (req, res) => {
  res.send(`
      <h1 style="color:blue;text-align:center;">This is a heading</h1>`);
});
app.use("/", userRouters);

app.listen(port, () => {
  console.log(`server connection with port no. ${port}`);
});
