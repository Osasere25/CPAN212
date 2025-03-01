const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// Dummy book data
const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" }
];

// Routes
app.get('/api/books', (req, res) => {
    res.json(books);
});

app.post('/api/login', (req, res) => {
    console.log('Login Request:', req.body);
    res.json({ message: "Login successful" });
});

app.post('/api/register', (req, res) => {
    console.log('Register Request:', req.body);
    res.json({ message: "User registered successfully" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
