const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const upload = require("../../middlewares/imageUploader");
const { Doctor, validateDoctor } = require("../../models/Doctors");
const { Department } = require("../../models/Departments");

// Function to check if an image exists in the uploads directory
const imageExists = (imageName) => {
  const imagePath = path.join(__dirname, "../../uploads", imageName);
  return fs.existsSync(imagePath);
};

// GET all doctors
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find().sort("name");
    res.send(doctors);
  } catch (error) {
    res.status(500).send({ error: "An error occurred while retrieving doctors." });
  }
});

// GET doctor by ID
router.get("/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).send("The doctor with the given ID was not found");
    }
    res.send(doctor);
  } catch (error) {
    res.status(500).send({ error: "An error occurred while retrieving the doctor." });
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



router.put("/:id", upload.single("doctorImage"), async (req, res) => {
  let uploadedFilePath = null;

  try {
    const { error } = validateDoctor(req.body);
    if (error) {
      return res.status(400).send(error.details.map((err) => err.message).join(", "));
    }

    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).send("The doctor with the given ID was not found.");
    }

    const newDepartment = await Department.findById(req.body.department);
    if (!newDepartment) {
      return res.status(400).send({ error: "Invalid department" });
    }

    let doctorImagePath = doctor.DoctorImage;
    if (req.file) {
      uploadedFilePath = `uploads/${req.file.filename}`;
      doctorImagePath = uploadedFilePath;
    }

    const updateFields = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      department: { _id: newDepartment._id, name: newDepartment.name },
      DoctorImage: doctorImagePath,
    };

    const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, updateFields, { new: true });

    if (req.file && doctor.DoctorImage) {
      await fs.unlink(doctor.DoctorImage).catch(console.error);
    }

    res.status(200).send(updatedDoctor);
  } catch (error) {
    if (uploadedFilePath) {
      await fs.unlink(uploadedFilePath).catch(console.error);
    }

    res.status(500).send({
      error: "An error occurred while updating the doctor: " + error.message,
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
