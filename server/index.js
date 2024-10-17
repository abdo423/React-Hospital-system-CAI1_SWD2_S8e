// index.js
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
const auth = require("./middlewares/auth");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const Contact = require("../models/Contact");
const contactRouter = require('./routes/contact'); // استيراد مسار الاتصال

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(cors());

// Database connection
const db_connect = config.get("DB_CONNECTION");
mongoose
  .connect(db_connect)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Connection failed");
  });

// Serve AdminLTE files
app.use("/adminlte", express.static(path.join(__dirname, "node_modules", "admin-lte")));
app.use("/fontawesome", express.static(path.join(__dirname, "node_modules", "@fortawesome", "fontawesome-free")));

// Set the view engine to EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Route ejs file
app.get("/login", (req, res) => {
  res.render("Login.ejs");
});

// Routes for Dashboard and Doctors
app.get("/Dashboard", auth, (req, res) => {
  const token = req.cookies['x-auth-token'];
  let username = 'Guest';

  if (token) {
    try {
      const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
      username = decoded.username;
    } catch (ex) {
      console.log('Invalid token');
    }
  }

  res.render('Dashboard.ejs', { username });
});

app.get("/Doctors", auth, (req, res) => {
  const token = req.cookies['x-auth-token'];
  let username = 'Guest';

  if (token) {
    try {
      const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
      username = decoded.username;
    } catch (ex) {
      console.log('Invalid token');
    }
  }
  res.render("Doctors.ejs", { username });
});

// Routes for contact
app.use('/api/contact', contactRouter); 
// Admin routes
app.use("/admin", require("./routes/Admin"));

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});