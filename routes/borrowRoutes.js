const express = require('express');
const router = express.Router();
const borrowController = require('../controllers/borrowController');
const checkRole = require('../middleware/authMiddleware');

router.post('/', checkRole('user'), borrowController.borrowBook); 

module.exports = router;