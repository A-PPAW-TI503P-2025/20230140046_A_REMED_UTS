const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const checkRole = require('../middleware/authMiddleware');

router.get('/', bookController.getAllBooks); 
router.post('/', checkRole('admin'), bookController.addBook); 

module.exports = router;