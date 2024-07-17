const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { register, login } = require('../controllers/authController');

// Register
router.post('/register', register);

// Login
router.post('/login', login);

module.exports = router;
