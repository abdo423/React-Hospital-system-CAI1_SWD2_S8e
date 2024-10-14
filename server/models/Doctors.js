const Joi = require("joi");
const config = require("config");
const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 55,
    },
    phone: {
        type: Number,
        required: true,
        minlength:11,
        maxlength: 11,
    },
    email:{
        type: String,
        required: true,
        minlength: 8,
        maxlength: 1024,
    },
    
});