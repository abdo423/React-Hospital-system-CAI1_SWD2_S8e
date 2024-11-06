const Joi = require("joi");
const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  bannerCover: {
    type: String,
    required: true,
  },
  isPublished: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Banner = mongoose.model("Banner", bannerSchema);

function handleBannerValidation(banner) {
  const schema = Joi.object({
    title: Joi.string().required(),
    subTitle: Joi.string().required(),
    isPublished: Joi.boolean().required(),
  });
  return schema.validate(banner, { abortEarly: false });
}

module.exports = {
  Banner,
  handleBannerValidation,
};