const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const checkRole = require('../middleware/authMiddleware');

router.get('/', bookController.getAllBooks); 
router.post('/', checkRole('admin'), bookController.addBook); 
router.get('/:id', bookController.getBookById); 
router.put('/:id', checkRole('admin'), bookController.updateBook); 
router.delete('/:id', checkRole('admin'), bookController.deleteBook);

module.exports = router;