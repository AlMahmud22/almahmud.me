const express = require('express');
const router = express.Router();

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact Form Data:', { name, email, message });
  res.status(200).json({ success: true, message: 'Message sent!' });
});

module.exports = router;
