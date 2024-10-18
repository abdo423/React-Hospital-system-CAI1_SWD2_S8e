const express = require("express");
const router = express.Router();
const { Department, validateDepartment } = require("../models/Departments");
const { Doctor } = require("../models/Doctors");
const jwt = require("jsonwebtoken"); 
const config = require("config");      
// GET all departments
router.get("/", async (req, res) => {
  const departments = await Department.find().sort("name");

   // Handle token logic here
   const token = req.cookies["x-auth-token"]; // Get the token from cookies
   let username = "Guest"; // Default value if no token is found

   if (token) {
     try {
       const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
       username = decoded.username; // Get the username from the JWT
     } catch (ex) {
      
       console.error("Invalid token:", ex);
     }
   }
  res.render("Departments.ejs",{departments:departments, username: username});
});

// GET department by ID
router.get("/:id", async (req, res) => {
  const department = await Department.findById(req.params.id);
  if (!department)
    return res
      .status(404)
      .send("The department with the given ID was not found.");
      res.render("Edit_Department.ejs",{department:department});
});

// POST create a new department
router.post("/", async (req, res) => {
  // Validate input
  const { error } = validateDepartment(req.body);
  if (error) {
    return res
      .status(400)
      .send(error.details.map((err) => err.message).join(", "));
  }

  // Check if department with the same name already exists
  const existingDepartment = await Department.findOne({ name: req.body.name });
  if (existingDepartment) {
    return res.status(400).send("Department with this name already exists.");
  }

  // Create a new department
  let department = new Department({ name: req.body.name });
  department = await department.save();
  res.status(201).send(department);
});

// PUT update a department by ID
router.put("/:id", async (req, res) => {
  // Validate input
  const { error } = validateDepartment(req.body);
  if (error) {
    return res
      .status(400)
      .send(error.details.map((err) => err.message).join(", "));
  }
  let department = await Department.findById(req.params.id);
  if (!department)
    return res
      .status(404)
      .send("The department with the given ID was not found."); // Check if department with the same name already exists

  const existingDepartment = await Department.findOne({ name: req.body.name });
  if (existingDepartment) {
    return res.status(400).send("Department with this name already exists.");
  }
  // Update the department
  department = await Department.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );

  if (!department)
    return res
      .status(404)
      .send("The department with the given ID was not found.");

  res.send(department);
});

// DELETE a department by ID
router.delete("/:id", async (req, res) => {
  // Find the department and delete it
  const department = await Department.findByIdAndDelete(req.params.id);
  if (!department)
    return res
      .status(404)
      .send("The department with the given ID was not found.");

  // Clean up doctors associated with the deleted department
  await Doctor.deleteMany({ "department._id": req.params.id });

  res.send(department);
});

router.use("/", (req, res, next) => {
    res.render("Departments.ejs");
});

module.exports = router;