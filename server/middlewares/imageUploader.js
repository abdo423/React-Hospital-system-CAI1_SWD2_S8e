const path = require('path');
const multer = require('multer');

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Use an absolute path to store files in the 'uploads' folder
    const uploadPath = path.join(__dirname, '../uploads');
    cb(null, uploadPath);  
  },
  filename: function (req, file, cb) {
    // Store only the filename with timestamp and original name
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Filter to allow only image uploads
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Unsupported file format'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

module.exports = upload;
