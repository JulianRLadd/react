const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

//server to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server is presently running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: "",
  },
});

contact;
