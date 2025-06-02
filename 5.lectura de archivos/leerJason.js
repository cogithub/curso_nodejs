import {readFile, readFileSync} from 'fs';

readFile('cv.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo JSON:', err);
        return;
    }
    try {
        const jsonData = JSON.parse(data);
        console.log('Contenido del archivo JSON:', jsonData);
    } catch (parseError) {
        console.error('Error al parsear el JSON:', parseError);
    }
});