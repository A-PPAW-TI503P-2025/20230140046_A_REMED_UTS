const Book = require('../models/book');
const BorrowLog = require('../models/borrowLog');

exports.borrowBook = async (req, res) => {
    try {
        const { bookId, latitude, longitude } = req.body; 
        const userId = req.headers['x-user-id']; 

        const book = await Book.findByPk(bookId);
        if (!book || book.stock <= 0) {
            return res.status(400).json({ message: "Stok habis atau buku tidak ditemukan" });
        }

        book.stock -= 1;
        await book.save();

        const log = await BorrowLog.create({
            userId,
            bookId,
            latitude,
            longitude
        });

        res.json({ message: "Buku berhasil dipinjam!", log });
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }
};