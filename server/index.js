const express = require("express");
const path = require("path");
const Joi = require("joi");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
const auth = require("./middlewares/auth");
const cookieParser = require("cookie-parser");
Joi.objectId = require("joi-objectid")(Joi);

const jwt = require("jsonwebtoken");
///////////////////////////built in middlewares///////////////////////////
//built-in middleware function:
app.use(express.json());
app.use(cookieParser()); // Add this middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(cors());
///////////////////////////Database connection///////////////////////////
const db_connect = config.get("DB_CONNECTION");
mongoose
  .connect(db_connect)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Connection failed");
  }); // Add your MongoDB connection string
//////////////////////////////////////////////////////////////////////
// Serve AdminLTE files
app.use(
  "/adminlte",
  express.static(path.join(__dirname, "node_modules", "admin-lte"))
);

// Serve Font Awesome from node_modules
app.use(
  "/fontawesome",
  express.static(
    path.join(__dirname, "node_modules", "@fortawesome", "fontawesome-free")
  )
);

// Set the view engine to EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
console.log("Views directory:", path.join(__dirname, "views"));
console.log("Login file path:", path.join(__dirname, "views", "login.ejs"));
// route ejs file
app.get("/", (req, res) => {
  res.render("Login.ejs");
});

app.get("/Dashboard", auth, (req, res) => {
  // Handle token logic here
  const token = req.cookies["x-auth-token"]; // Get the token from cookies
  let username = "Guest"; // Default value if no token is found

  if (token) {
    try {
      const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
      username = decoded.username; // Get the username from the JWT
    } catch (ex) {
      console.log("Invalid token");
    }
  }

  res.render("Dashboard.ejs", { username });
});
app.use("/api/doctors/new", (req, res) => {
  res.render("New_Doctor.ejs");
});
////////////////////////////////////////////////////////////
///////////////////////////Routes///////////////////////////
app.use("/admin", require("./routes/Admin"));
app.use("/departments", require("./routes/Frontend/Departments"));
app.use("/doctors", require("./routes/Frontend/Doctors"));
app.use("/posts", require("./routes/Frontend/Post"));
//////ejs routes//////////////////////////////////////
app.use("/api/doctors", require("./routes/Doctors"));
app.use("/api/departments", require("./routes/Departments"));
app.use("/api/posts", require("./routes/Post"));
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
