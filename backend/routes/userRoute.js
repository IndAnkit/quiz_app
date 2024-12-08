const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

// Get all users
router.get('/', userController.getUser);
router.get('/:userId', userController.getUserById);

module.exports = router;
