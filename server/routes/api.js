const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');

// @route post api/users
// @desc Regsiter a user
// @access Public
router.post('/users', createUser);
module.exports = router;