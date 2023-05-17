// require để sử dụng
const express = require("express");
const cors = require("cors");

const app = express();
const mongoose = require("mongoose");

var bodyParter = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const userRouter = require("./routes/userRouter");

dotenv.config();
//CONNECT DATABASE
const callMongo = () => {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("Conneted to MongoDB");
};
callMongo();

app.use(bodyParter.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

// ADD User
app.use("/v1/user", userRouter);

app.listen(8000, () => {
  console.log("Sever is running...");
});
