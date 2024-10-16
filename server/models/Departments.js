const Joi = require("joi");
const config = require("config");
const mongoose = require("mongoose");
const departmentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
    },
    doctors: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Doctor", // Reference to Doctor model
        },
        name: {
          type: String, // Store doctor's name
        },
      },
    ],
  });
  
  // Middleware to remove all doctors in a department before department deletion
  departmentSchema.pre("remove", async function (next) {
    const Doctor = mongoose.model("Doctor");
    await Doctor.deleteMany({ "department._id": this._id });
    next();
  });
  
  // Middleware to update the department name in doctors if the department name is changed
  departmentSchema.pre("findOneAndUpdate", async function (next) {
    try {
      // Check if the update includes a name change
      if (!this._update.name) {
        return next();
      }
  
      // Find the document that's being updated
      const doc = await this.model.findOne(this.getQuery());
  
      // Update the name of the department in all associated doctors
      await this.model.db.model("Doctor").updateMany(
        { "department._id": doc._id }, // Match doctors where department._id matches the updated department
        { "department.name": this._update.name }
      );
      next();
    } catch (error) {
      next(error);
    }
  } );
  
  const Department = mongoose.model("Department", departmentSchema);
  
  // Validation for Department input
  function validateDepartment(department) {
    const schema = Joi.object({
      name: Joi.string().min(3).max(255).required(),
    });
    return schema.validate(department);
  }
  
  module.exports = { Department, validateDepartment };
  