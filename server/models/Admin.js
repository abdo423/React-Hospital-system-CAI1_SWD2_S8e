const Joi = require("joi");
const config = require("config");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
 

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 55,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 1024,
    },
    email:{
        type: String,
        required: true,
        minlength: 8,
        maxlength: 1024,
    }
});

adminSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { _id: this._id, username: this.username },
        config.get("jwtPrivateKey"),
        { expiresIn: "1h" },
    );
    return token;
}

const Admin = mongoose.model("Admin", adminSchema);

function validateAdminLogin(admin) {
    const schema = Joi.object({
        password: Joi.string().min(8).max(1024).required(),
        email: Joi.string().min(8).max(1024).required().email(),
    });
    return schema.validate(admin);
}
function validateAdminRegister(admin) {
    const schema = Joi.object({
        username: Joi.string().min(8).max(55).required(),
        password: Joi.string().min(8).max(1024).required(),
        email: Joi.string().min(8).max(1024).required().email(),
    });
    return schema.validate(admin);
}
module.exports = {
    Admin,
    validateAdminLogin,
    validateAdminRegister
};  
