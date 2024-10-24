const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  subject: {
    type: String,
    required: true,
    minlength: 3,
  },
  message: {
    type: String,
    required: true,
    minlength: 5,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
