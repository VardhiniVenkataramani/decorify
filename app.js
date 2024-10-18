const express = require('express');
const app = express();

app.use(express.static('public')); // Serve static files like HTML, CSS

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
