const { Banner, handleBannerValidation } = require('../models/Banner');
const upload = require('../middlewares/imageUploader');
const express = require("express");
const router = express.Router();

// Get all banners
router.get("/", async (req, res) => {
  const banners = await Banner.find().sort("title");
  res.send(banners);
});

// Add a new banner
router.post("/", upload.single('bannerCover'), async (req, res) => {
  const { error } = handleBannerValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages);
  }

  if (!req.file) {
    return res.status(400).send('Banner cover is required.');
  }

  let banner = new Banner({
    title: req.body.title,
    subTitle: req.body.subTitle,
    bannerCover: req.file.path,
    isPublished: req.body.isPublished,
  });

  try {
    banner = await banner.save();
    res.status(201).send(banner);
  } catch (error) {
    res.status(500).send('An error occurred while saving the banner.');
  }
});

// Update an existing banner
router.put("/:id", upload.single('bannerCover'), async (req, res) => {
  const { error } = handleBannerValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages);
  }

  let banner = await Banner.findById(req.params.id);
  if (!banner) return res.status(404).send('Banner with the given ID was not found.');

  const updatedData = {
    title: req.body.title,
    subTitle: req.body.subTitle,
    isPublished: req.body.isPublished,
  };

  if (req.file) {
    updatedData.bannerCover = req.file.path;
  }

  banner = await Banner.findByIdAndUpdate(req.params.id, updatedData, { new: true });
  res.status(200).send(banner);
});

// Delete a banner
router.delete("/:id", async (req, res) => {
  const banner = await Banner.findByIdAndDelete(req.params.id);
  if (!banner) return res.status(404).send('The banner with the given ID was not found.');
  res.status(200).send(banner);
});

module.exports = router;