const Joi = require("joi");
const mongoose = require("mongoose");

// Define Doctor Schema
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 55,
  },
  phone: {
    type: String, // Make phone a string to ensure it matches exactly 11 characters
    required: true,
    length: 11, // 11 characters long
  },
  email: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024,
  },
  department: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department", // Reference to Department model
      required: true,
    },
    name: {
      type: String, // Include department name
      required: true,
    },
  },
  DoctorImage: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
doctorSchema.pre("remove", async function (next) {
  // Remove doctor from department's doctors array
  await this.model("Department").updateOne(
    { _id: this.department._id },
    { $pull: { doctors: { _id: this._id } } }
  );
  next();
});
doctorSchema.pre("findOneAndUpdate", async function(next) {
  try {
    const update = this.getUpdate();
    const doc = await this.model.findOne(this.getQuery());

    if (!doc) {
      throw new Error('Doctor not found');
    }

    if (update.department && update.department._id.toString() !== doc.department._id.toString()) {
      // Department is changing, handle the change here
      const oldDepartment = await mongoose.model('Department').findById(doc.department._id);
      const newDepartment = await mongoose.model('Department').findById(update.department._id);

      if (!oldDepartment || !newDepartment) {
        throw new Error('Department not found');
      }

      // Remove from old department
      await mongoose.model('Department').updateOne(
        { _id: oldDepartment._id },
        { $pull: { doctors: { _id: doc._id } } }
      );

      // Add to new department
      await mongoose.model('Department').updateOne(
        { _id: newDepartment._id },
        { $addToSet: { doctors: { _id: doc._id, name: update.name || doc.name } } }
      );
    } else if (update.name && update.name !== doc.name) {
      // Only name is changing, update in current department
      await mongoose.model('Department').updateOne(
        { _id: doc.department._id, "doctors._id": doc._id },
        { $set: { "doctors.$.name": update.name } }
      );
    }

    next();
  } catch (error) {
    next(error);
  }
});

const Doctor = mongoose.model("Doctor", doctorSchema);

// Validation for Doctor input
function validateDoctor(doctor) {
  const schema = Joi.object({
    name: Joi.string().min(8).max(55).required(),
    phone: Joi.string().length(11).required(), // Ensure phone is exactly 11 characters long
    email: Joi.string().min(8).max(1024).required().email(),
    department: Joi.objectId().required(),
  });
  return schema.validate(doctor);
}

module.exports = { Doctor, validateDoctor };
