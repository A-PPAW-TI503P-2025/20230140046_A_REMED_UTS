const express = require('express');
const sequelize = require('./config/database');
const Book = require('./models/book');
const BorrowLog = require('./models/borrowLog');
const bookRoutes = require('./routes/bookRoutes');
const borrowRoutes = require('./routes/borrowRoutes');

const app = express();
app.use(express.json()); 
app.use('/api/books', bookRoutes); 
app.use('/api/borrow', borrowRoutes);

sequelize.sync({ force: false }) 
    .then(() => console.log('Database synced!'))
    .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));