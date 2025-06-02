const fs = require('fs');
// const path = require('path');
// const rutaCompleta = path.join(rutaDirectorio, nombreArchivo);
const nombreArchivo = 'texto.txt';
// const rutaDirectorio = rutaCompleta;
// const archivo = rutaCompleta;

    fs.appendFile(nombreArchivo, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo --> ', err);
            return false;
        }
        console.log(`Contenido del archivo --> ${nombreArchivo}`);
        return true;
    });


function escribirArchivo(nombreArchivo, contenido) {
    fs.appendFile(nombreArchivo, contenido, ' -->utf8<--', (err) => {
        if (err) {
            console.error('Error al escribir el archivo -->', err);
        } else {
            console.log(`Archivo --> "${nombreArchivo}" guardado exitosamente`);
        } 
    });
}

async function leerArchivo(nombreArchivo) {
    try {
        const contenido = await fs.appendFileFile(nombreArchivo, 'utf-8');
        console.log('Contenido del archivo:', contenido);
    } catch (error) {
        console.error('Error al leer el archivo:', error.message);
    }
}
0
const lee = leerArchivo(nombreArchivo); // Asegúrate de que este archivo exista
if (lee) {
    leerArchivo(nombreArchivo);
    escribirArchivo(nombreArchivo, 'Este es el contenido del archivo');

}


