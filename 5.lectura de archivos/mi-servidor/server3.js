const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');
app.get('/datos', (req, res) => {
    // res.send('¡hola mundo!');
    fs.readFile('cv.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        } else {
            const jsonData = JSON.parse(data);
            res.send( jsonData);
        }
    });
    
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en la LAN en el puerto ${PORT}`);
});

// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });


// fs.readFile('cv.json', 'utf8', (err, data) => {
    //     if (err) {
//         console.error('Error reading file:', err);
//         res.status(500).send('Error reading file');
//         return;
//     }
//     try {
//         const jsonData = JSON.parse(data);
//         res.json(jsonData);
//     } catch (parseErr) {
//         console.error('Error parsing JSON:', parseErr);
//         res.status(500).send('Error parsing JSON');
//     }
// });