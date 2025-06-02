
import fs from 'fs';

function leerJson() {
    fs.readFile('cv.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        } else {
            const jsonData = JSON.parse(data);
            console.log('JSON data:', jsonData);
            return jsonData;
        }
    });
}

leerJson();