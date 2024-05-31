const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const toMarkdownTable = require('ohmd');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/convert', (req, res) => {
    try {
        const data = req.body.data;
        const options = req.body.options || {};
        console.log('Received data:', data);
        console.log('Received options:', options);
        const markdownTable = toMarkdownTable(data, options);
        res.send(markdownTable);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
