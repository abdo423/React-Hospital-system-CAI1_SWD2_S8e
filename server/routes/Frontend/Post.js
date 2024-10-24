const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const router = express.Router();
const upload = require("../../middlewares/imageUploader");
const jwt = require("jsonwebtoken");
const config = require("config");
const { BlogPost, blogPostValidator } = require("../../models/Post");
const auth = require("../../middlewares/auth");
const { default: postcss } = require("postcss");



router.get("/", async (req, res) => {
    const posts = await BlogPost.find().sort("date");
  
    try {
        res.send(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).send({ error: "An error occurred while retrieving posts." });
    }
});

router.get("/:id", async (req, res) => {
    const post = await BlogPost.findById(req.params.id);
    try {
        res.send(post);
    } catch (error) {
        console.error("Error fetching post:", error);
        res.status(500).send({ error: "An error occurred while retrieving the post." });
    }
});

router.post("/", upload.single("image"), async (req, res) => {
    try {
        const { error } = blogPostValidator(req.body);
        if (error) {
            const errorMessages = error.details.map((detail) => detail.message);
            return res.status(400).send({ errors: errorMessages });
        }

        if (!req.file) {
            return res.status(400).send({ error: "Post image is required." });
        }

        const shortPath = `uploads/${req.file.filename}`;

        const post = new BlogPost({
            title: req.body.title,
            author: req.body.author,
            content: req.body.content,
            image: shortPath,
        });

        await post.save();
        res.status(201).send(post);
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).send({ error: "An error occurred while creating the post." });
    }
});

router.put("/:id", upload.single("image"), async (req, res) => {
    try {
        const { error } = blogPostValidator(req.body);
        if (error) {
            return res.status(400).send({ error: error.details.map((err) => err.message).join(", ") });
        }

        let post = await BlogPost.findById(req.params.id);
        if (!post) {
            return res.status(404).send({ error: "Post not found" });
        }

        let imagePath = post.image;
        if (req.file) {
            const shortPath = `uploads/${req.file.filename}`;
            imagePath = shortPath;
        }

        const updatedPost = {
            title: req.body.title,
            author: req.body.author,
            content: req.body.content,
            image: imagePath,
        };

        const updatedBlog = await BlogPost.findByIdAndUpdate(req.params.id, updatedPost, { new: true });

        if (req.file && post.image) {
            await fs.unlink(post.image).catch(console.error);
        }

        res.status(200).send(updatedBlog);
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
        await fs.unlink(path.join(__dirname, "../", post.image));
        res.send(post);
    } catch (error) {
        console.error("Error deleting post:", error);
        res.status(500).send({ error: "An error occurred while deleting the post." });
    }
});

module.exports = router;