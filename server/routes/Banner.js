const { Banner, handleBannerValidation } = require('../models/HomepageBanner');
const upload = require('../middlewares/imageUploader');
const express = require("express");
const router = express.Router();

/**************************************************************************************************/
// Render edit banner form
router.get("/:id/edit", async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id);
    if (!banner) {
      return res.status(404).send("Banner not found");
    }
    res.render("edit_banner", { errors: [], banner: banner });
  } catch (err) {
    res.status(500).send("An error occurred while fetching the banner");
  }
});

/**************************************************************************************************/
// Get all banners
router.get("/", async (req, res) => {
  const banners = await Banner.find();
  res.render("banners", { banners });
});

/**************************************************************************************************/
// Get banner by ID
router.get("/:id", async (req, res) => {
  const banner = await Banner.findById(req.params.id);
  if (!banner) {
    return res.status(404).send("Banner not available");
  }
  res.render("view_banner", { banner });
});

/**************************************************************************************************/
// Adding banner
router.post("/", upload.single('bannerCover'), async (req, res) => {
  const { error } = handleBannerValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).render('add_banner', { errors: errorMessages, banner: req.body });
  }

  if (!req.file) {
    return res.status(400).send('Banner cover is required.');
  }

  const bannerCoverPath = req.file.path.replace(/\\/g, '/');

  let banner = new Banner({
    title: req.body.title,
    subTitle: req.body.subTitle,
    isPublished: req.body.isPublished,
    bannerCover: bannerCoverPath,
  });

  try {
    banner = await banner.save();
    res.status(201).redirect("/banners");
  } catch (error) {
    res.status(500).send('An error occurred while saving the banner');
  }
});

/**************************************************************************************************/
// Updating banner
router.put("/:id", upload.single('bannerCover'), async (req, res) => {
  const { error } = handleBannerValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).render('edit_banner', { errors: errorMessages, banner: req.body });
  }

  let banner = await Banner.findById(req.params.id);
  if (!banner) {
    return res.status(404).send('The banner with the given ID was not found');
  }

  const updatedData = {
    title: req.body.title,
    subTitle: req.body.subTitle,
    isPublished: req.body.isPublished,
  };

  if (req.file) {
    updatedData.bannerCover = req.file.path.replace(/\\/g, '/');
  }

  try {
    banner = await Banner.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.status(200).redirect("/banners");
  } catch (error) {
    res.status(500).send("An error occurred while updating the banner");
  }
});

/**************************************************************************************************/
// Deleting banner
router.delete("/:id", async (req, res) => {
  try {
    const banner = await Banner.findByIdAndDelete(req.params.id);
    if (!banner) {
      return res.status(404).send("The banner is not available");
    }
    res.status(204).redirect("/banners");
  } catch (error) {
    res.status(500).send("An error occurred during deletion");
  }
});

module.exports = router;
