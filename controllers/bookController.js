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

exports.getBookById = async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });
    res.json(book);
};

exports.updateBook = async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });
    
    await book.update(req.body);
    res.json({ message: "Buku diperbarui", book });
};

exports.deleteBook = async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });
    
    await book.destroy();
    res.json({ message: "Buku berhasil dihapus" });
};