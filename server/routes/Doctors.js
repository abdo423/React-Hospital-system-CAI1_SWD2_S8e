const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const upload = require("../middlewares/imageUploader");
const { Doctor, validateDoctor } = require("../models/Doctors");
const { Department } = require("../models/Departments");
const jwt = require("jsonwebtoken");
const config = require("config");
// Function to check if an image exists in the uploads directory
const imageExists = (imageName) => {
  const imagePath = path.join(__dirname, "../../uploads", imageName);
  return fs.existsSync(imagePath);
};

// GET doctor by id 
router.get("/:id", async (req, res) => {
  try {
      const doctor = await Doctor.findById(req.params.id).populate('department');
      if (!doctor) {
          return res.status(404).render("error", { error: "The doctor with the given ID was not found." });
      }

     
      res.render("Edit_Doctor.ejs", { doctor: doctor});
  } catch (error) {
      console.error("Error fetching doctor:", error);
      res.status(500).render("error", { error: "An error occurred while retrieving the doctor." });
  }
});
// GET all doctors
router.get("/", async (req, res) => {
  try {
      const doctors = await Doctor.find().populate('department').sort("name");
      
      // Handle token logic here
      const token = req.cookies['x-auth-token']; // Get the token from cookies
      let username = 'Guest'; // Default value if no token is found

      if (token) {
          try {
              const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
              username = decoded.username; // Get the username from the JWT
          } catch (ex) {
              console.error('Invalid token:', ex);
          }
      }
      console.log("doctors", doctors);

      res.render("Doctors", { doctors: doctors, username: username });
  } catch (error) {
      console.error("Error fetching doctors:", error);
      res.status(500).render("error", { error: "An error occurred while retrieving doctors." });
  }
});

// POST create a new doctor
router.post("/", upload.single("doctorImage"), async (req, res) => {
  try {
    // Validate doctor input
    const { error } = validateDoctor(req.body);
    if (error) {
      return res.status(400).send(error.details.map((err) => err.message).join(", "));
    }

    // Validate department existence
    const department = await Department.findById(req.body.department);
    if (!department) {
      return res.status(400).send({ error: "Invalid department" });
    }

    // Check if a doctor with the same email already exists
    const existingDoctor = await Doctor.findOne({ email: req.body.email });
    if (existingDoctor) {
      return res.status(400).send({ error: "Doctor with this email already exists." });
    }

    // Check if the image already exists
    if (!req.file) {
      return res.status(400).send({ error: "Doctor image is required." });
    }
    let doctorImagePath = "";
    const shortPath = `uploads/${req.file.filename}`;
     
    // Prepare the doctor object
    const doctor = new Doctor({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      department: { _id: department._id, name: department.name },
      DoctorImage: shortPath,
    });

    // Save the doctor
    await doctor.save();

    // Update department's doctors array
    department.doctors.push({ _id: doctor._id, name: doctor.name });
    await department.save();

    res.status(201).send(doctor);
  } catch (error) {
    res.status(500).send({
      error: "An error occurred while creating the doctor: " + error.message,
    });
  }
});



router.post("/", upload.single("doctorImage"), async (req, res) => {
  try {
    // Validate doctor input
    const { error } = validateDoctor(req.body);
    if (error) {
      return res.status(400).send(error.details.map((err) => err.message).join(", "));
    }

    // Validate department existence
    const department = await Department.findById(req.body.department);
    if (!department) {
      return res.status(400).send({ error: "Invalid department" });
    }

    // Check if a doctor with the same email already exists
    const existingDoctor = await Doctor.findOne({ email: req.body.email });
    if (existingDoctor) {
      return res.status(400).send({ error: "Doctor with this email already exists." });
    }

    // Check if the image already exists
    if (!req.file) {
      return res.status(400).send({ error: "Doctor image is required." });
    }
    let doctorImagePath = "";
    doctorImagePath = `uploads/${req.file.filename}`;
     
    // Prepare the doctor object
    const doctor = new Doctor({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      department: { _id: department._id, name: department.name },
      DoctorImage: doctorImagePath,
    });

    // Save the doctor
    await doctor.save();

    // Update department's doctors array
    department.doctors.push({ _id: doctor._id, name: doctor.name });
    await department.save();

    res.status(201).send(doctor);
  } catch (error) {
    res.status(500).send({
      error: "An error occurred while creating the doctor: " + error.message,
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) {
      return res.status(404).send("The doctor with the given ID was not found.");
    }

    // Delete the doctor image
    if (doctor.DoctorImage && imageExists(path.basename(doctor.DoctorImage))) {
      fs.unlinkSync(path.join(__dirname, "../../uploads", path.basename(doctor.DoctorImage)));
    }

    // Remove the doctor from the department
    const department = await Department.findById(doctor.department._id);
    department.doctors = department.doctors.filter((doc) => doc._id.toString() !== req.params.id);
    await department.save();

 

    res.send(doctor);
  } catch (error) {
    res.status(500).send({ error: "An error occurred while deleting the doctor. " + error.message });
  }
});
module.exports = router;
