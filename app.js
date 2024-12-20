const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // Parses form data
app.use(express.static(path.join(__dirname, "public"))); // Serves static files

// Set EJS as the view engine
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("login"); // Render the login page
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
