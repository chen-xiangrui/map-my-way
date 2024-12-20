const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('login'); // Render the login page
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Authenticate user (placeholder logic)
  if (email && password) {
    res.redirect('/home'); // Redirect to homepage after login
  } else {
    res.redirect('/'); // Redirect back to login on failure
  }
});

module.exports = router;
