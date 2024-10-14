const express = require("express");
const router = express.Router();
const {
  Admin,
  validateAdminLogin,
  validateAdminRegister,
} = require("../models/Admin");
const Joi = require("joi");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  const { error } = validateAdminLogin(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages); // Send all error messages
  }
  let admin = await Admin.findOne({ email: req.body.email });
  if (!admin) return res.status(400).send("Invalid email or password");
  const validPassword = await bcrypt.compare(req.body.password, admin.password);
  if (!validPassword) return res.status(400).send("Invalid email or password");
  const token = admin.generateAuthToken();
  res
    .cookie("x-auth-token", token) // Set token in cookie
    .redirect("/Dashboard"); // Redirect to Dashboard
});

router.post("/register", async (req, res) => {
  const { error } = validateAdminRegister(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages); // Send all error messages
  }
  let admin = await Admin.findOne({ username: req.body.username });
  if (admin) return res.status(400).send("Username already exists");
  admin = new Admin({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  const salt = await bcrypt.genSalt(10);
  admin.password = await bcrypt.hash(admin.password, salt);
  await admin.save();
  const token = admin.generateAuthToken();
  res
    .header("x-auth-token", token)
    .send({ username: admin.username, email: admin.email });
});
module.exports = router;
