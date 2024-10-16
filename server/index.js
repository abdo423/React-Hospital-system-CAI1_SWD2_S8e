const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
const auth = require("./middlewares/auth");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const Contact = require("../models/Contact");
///////////////////////////built in middlewares///////////////////////////
//built-in middleware function:
app.use(cookieParser());  // Add this middleware
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
app.get("/login", (req, res) => {
  res.render("Login.ejs");
});


app.get("/Dashboard",auth, (req, res) => {
  // Handle token logic here
  const token = req.cookies['x-auth-token']; // Get the token from cookies
  let username = 'Guest'; // Default value if no token is found

  if (token) {
      try {
          const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
          username = decoded.username; // Get the username from the JWT
      } catch (ex) {
          console.log('Invalid token');
      }
  }

  res.render('Dashboard.ejs', { username });

});
app.get("/Doctors",auth, (req, res) => {
    // Handle token logic here
      // Handle token logic here
  const token = req.cookies['x-auth-token']; // Get the token from cookies
  let username = 'Guest'; // Default value if no token is found

  if (token) {
      try {
          const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
          username = decoded.username; // Get the username from the JWT
          console.log(username);
      } catch (ex) {
        console.log(ex);
          console.log('Invalid token');
      }
  }
    res.render("Doctors.ejs" ,{ username });
  });
////////////////////////////////////////////////////////////
///////////////////////////Routes///////////////////////////
app.post('/api/contact/', async (req, res) => {
  try {
    const { name, message } = req.body;
    if (!name || !message) {
      return res.status(404).json({ message: 'not found' });
    }
    const newContact = new Contact({ name, message });
    await newContact.save();
    res.status(200).json({ message: 'thank you for contacting us' });
  } catch (error) {
    res.status(500).json({ message: 'internal error' });
  }
});

// Get all contact messages
app.get('/api/contact/', async (req, res) => {
  try {
    const contacts = await Contact.find().exec();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'internal error' });
  }
});

// Get a contact message by ID
app.get('/api/contact/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id).exec();
    if (!contact) {
      return res.status(404).json({ message: 'not found' });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: 'internal error' });
  }
});

////////////////////////////////
///////////////////////////////
app.use("/admin", require("./routes/Admin"));
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});



