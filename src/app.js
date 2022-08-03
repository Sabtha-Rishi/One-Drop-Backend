//BUILT IN IMPORTS
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

// ROUTER IMPORTS

const AccountsRouter = require("./router/accounts.router");

// EXPRES APP
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// Connect to MongoDB
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("Connected to DB"))
  .catch((err) => console.log(err));

// ROUTES
app.use("/accounts", AccountsRouter);

// EXPORTS
module.exports = app;
