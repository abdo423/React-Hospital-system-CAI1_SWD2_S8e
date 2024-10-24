const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const router = express.Router();
const upload = require("../middlewares/imageUploader");
const jwt = require("jsonwebtoken");
const config = require("config");
const { BlogPost, blogPostValidator } = require("../models/Post");
const auth = require("../middlewares/auth");

router.get("/", async (req, res) => {
  try {
    const posts = await BlogPost.find().sort("date");

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

    res.render("Posts.ejs", { posts: posts, username: username });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).render("Posts.ejs", {
      error: "An error occurred while retrieving posts.",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) {
      return res.status(404).render("Post.ejs", { error: "Post not found." });
    }
    res.render("Post.ejs", { post: post });
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).render("Post.ejs", {
      error: "An error occurred while retrieving the post.",
    });
  }
});

router.post("/", upload.single("image"), async (req, res) => {
  try {
  

    // Validate post input
    const { error } = blogPostValidator(req.body);
    if (error) {
      const errorMessages = error.details.map((detail) => detail.message);
      return res.status(400).render("Posts.ejs", { errors: errorMessages });
    }

    // Check if the image is provided
    if (!req.file) {
      console.log("No file uploaded. Request:", req);
      return res.status(400).send({ error: "Post image is required. No file was received by the server." });
    }

    // ... rest of the code
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).render("Posts.ejs", {
      error: "An error occurred while creating the post.",
    });
  }
});

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    // Validate post input
    const { error } = blogPostValidator(req.body);
    if (error) {
      return res
        .status(400)
        .send({ error: error.details.map((err) => err.message).join(", ") });
    }

    // Find the post to update
    const post = await BlogPost.findById(req.params.id);
    if (!post) {
      return res.status(404).send({ error: "Post not found" });
    }

    let imagePath = post.image; // Keep the old image path unless updated
    if (req.file) {
      const shortPath = `uploads/${req.file.filename}`;
      imagePath = shortPath;

      // Delete the old image (if there was one)
      await fs.unlink(path.join(__dirname, "../", post.image)).catch(console.error);
    }

    const updatedPost = {
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
      image: imagePath,
    };

    const updatedBlog = await BlogPost.findByIdAndUpdate(
      req.params.id,
      updatedPost,
      { new: true }
    );

    res.status(200).send(updatedBlog); // Respond with the updated blog post
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).send({ error: "An error occurred while updating the post." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).send({ error: "Post not found" });
    }
    await fs.unlink(path.join(__dirname, "../", post.image)); // Delete the image file
    res.send(post);
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).send({ error: "An error occurred while deleting the post." });
  }
});

module.exports = router;
