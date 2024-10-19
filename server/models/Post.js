const Joi = require("joi");
const mongoose = require("mongoose");

// Mongoose Schema
const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 5,  // Applying min length of 5 characters for title
    maxLength: 100 // Applying max length of 100 characters for title
  },
  author: {
    type: String,
    required: true,
    minLength: 5,   // Applying min length of 5 characters for author
    maxLength: 50   // Applying max length of 50 characters for author
  },
  date: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
    minLength: 50,  // Applying min length of 50 characters for content
    maxLength: 2000 // Applying max length of 2000 characters for content
  },
  image: {
    type: String,  // This could be a URL or path to the image
    required: false,
  },
});

// Joi Validation Schema
const blogPostValidator = (post) => {
  const schema = Joi.object({
    title: Joi.string().min(5).max(100).required(),  // Title between 5 and 100 characters
    author: Joi.string().min(5).max(50).required(), // Author between 5 and 50 characters
    content: Joi.string().min(50).max(2000).required(), // Content between 50 and 2000 characters
    image: Joi.string().optional() // Image field is optional
  });
  return schema.validate(post);
};

// Mongoose Model
const BlogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = { BlogPost, blogPostValidator };
