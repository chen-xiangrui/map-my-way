const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Mock data for events
  const events = [
    { id: 1, date: '2024-12-19', title: 'Dinner with Ben' },
    { id: 2, date: '2024-12-20', title: 'Lunch with Family' },
  ];
  res.render('home', { events });
});

module.exports = router;
