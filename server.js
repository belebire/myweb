const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

let users = {}; // Simple in-memory user storage

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../mycode')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../mycode/login.html')); // Serve login page by default
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});