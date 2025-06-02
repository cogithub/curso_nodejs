const express = require('express');
const { userCard } = require('Faker/lib/helpers');
const app = express();
const PORT = 3000;
const fs = require('fs');

app.get('/mensaje', (req, res) => {
    // res.send('¡Hola desde el servidor Express!');
    // callback();
    fs.readFile('cv.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        } else {
            const jsonData = JSON.parse(data);
            res.send('JSON data:', jsonData);
            // res.send('¡Hola desde el servidor Express!');
            
            return jsonData;
        }
    });
    
    // callback();
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
