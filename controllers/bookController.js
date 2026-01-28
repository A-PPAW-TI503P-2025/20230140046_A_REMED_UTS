const Book = require('../models/book');

exports.getAllBooks = async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
};

exports.addBook = async (req, res) => {
    try {
        const { title, author, stock } = req.body;
        if (!title || !author) return res.status(400).json({ message: "Title & Author wajib diisi" });
        const newBook = await Book.create({ title, author, stock });
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }
};