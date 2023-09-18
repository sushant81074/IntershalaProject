const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const cors = require("cors");
const app = express();

const fetchData = require("./api/index");
const router = require("./routes/cryptoRoutes");

env.config({
  path: ".env",
});

const main = () => {
  mongoose
    .connect(process.env.dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("db connection successfull"))
    .catch((err) => console.log(err.message));

  fetchData();
};

main();

app.set("view engine", "ejs");
app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port : ${process.env.PORT}`);
});
