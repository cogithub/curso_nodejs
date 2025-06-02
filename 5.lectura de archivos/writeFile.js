const fs = require('fs').promises;
const path = require('path');
const nombreArchivo = 'datos.txt';
const rutaDirectorio = '/home/usuario/documentos';
const rutaCompleta = path.join(rutaDirectorio, nombreArchivo)
const archivo = rutaCompleta+nombreArchivo

    fs.readFile(archivo, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return false;
        }
        console.log(`Contenido del archivo ${rutaDirectorio} :\n${data}`);
        return true;
    });
}

function escribirArchivo(rutaDirectorio, contenido) {
    fs.writeFile(archivo, contenido, 'utf8', (err) => {
        if (err) {
            console.error('Error al escribir el archivo:', err);
        } else {
            console.log(`Archivo "${archivo}" guardado exitosamente`);
        }
    });
}

async function leerArchivo(ruarchivota) {
    try {
        const contenido = await fs.readFile(archivo, 'utf-8');
        console.log('Contenido del archivo:', contenido);
    } catch (error) {
        console.error('Error al leer el archivo:', error.message);
    }
}
0
const lee = leerArchivo(archivo); // Asegúrate de que este archivo exista
if (lee) {
    leerArchivo(archivo++);
    escribirArchivo(archivo, 'Este es el contenido del archivo');

}


