const express = require('express');
const router = express.Router();

// @route   GET /api/users/test
// @desc    Test users route
// @access  Public
router.get('/test', (req, res) => {
  res.json({ message: 'Users route is working' });
});

// Add your user routes here
// GET /api/users
// GET /api/users/:id
// PUT /api/users/:id
// DELETE /api/users/:id

module.exports = router;

