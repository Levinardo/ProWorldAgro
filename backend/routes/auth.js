const express = require('express');
const router = express.Router();

// @route   GET /api/auth/test
// @desc    Test auth route
// @access  Public
router.get('/test', (req, res) => {
  res.json({ message: 'Auth route is working' });
});

// Add your authentication routes here
// POST /api/auth/register
// POST /api/auth/login
// GET /api/auth/me

module.exports = router;

