const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});