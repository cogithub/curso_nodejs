const express = require('express');
const { userCard } = require('Faker/lib/helpers');
const app = express();
const PORT = 3000;
const fs = require('fs');
const os = require('os');

app.get('/', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.send(`Tu IP es: ${ip}`);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000');
});

