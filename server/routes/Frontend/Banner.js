const express = require('express');
const { Banner } = require('../../models/HomePageBanner');
const router = express.Router();

/**************************************************************************************************/
/*
  this API for connecting the client project so it will return json 
  not like the courses at this path:  \routes\courses.js  it returns html (ejs)

*/
// Get all banners (API route for client-side JSON requests)
router.get('/', async (req, res) => {
  try {
    const banners = await Banner.find(); // Fetch banners from MongoDB
    res.status(200).json(banners);  // Send JSON response
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch banners' });
  }
});
/**************************************************************************************************/
// Get banner by ID (API route for fetching a single banner by its ID)
router.get('/:id', async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id); // Fetch banner by ID from MongoDB
    if (!course) {
      return res.status(404).json({ error: 'banner not found' }); // Handle banner not found
    }
    res.status(200).json(course);  // Send JSON response
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch banner' });
  }
});
module.exports = router;
