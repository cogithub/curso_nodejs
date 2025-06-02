/**
 * Módulo para manejar operaciones de archivo (lectura y escritura)
 * Este script permite leer y añadir contenido a un archivo de texto
 */

// Importamos el módulo fs (filesystem) para operaciones de archivos
const fs = require('fs');

// Definimos el nombre del archivo con el que vamos a trabajar
const nombreArchivo = 'texto.txt';

/**
 * Primera operación: Intenta abrir el archivo para añadir contenido
 * NOTA: Esta función tiene un error, ya que appendFile espera contenido como segundo parámetro,
 * no el encoding. Debería ser fs.readFile en su lugar si queremos leer.
 */
fs.appendFile(nombreArchivo, 'utf8', (err, data) => {
    if (err) {
        // Si hay un error, lo mostramos en la consola
        console.error('Error al leer el archivo --> ', err);
        return false;
    }
    // Si la operación es exitosa, mostramos un mensaje
    console.log(`Contenido del archivo --> ${nombreArchivo}`);
    return true;
});

/**
 * Función para escribir/añadir contenido a un archivo
 * @param {string} nombreArchivo - Nombre del archivo donde se escribirá
 * @param {string} contenido - Contenido que se añadirá al archivo
 */
function escribirArchivo(nombreArchivo, contenido) {
    // Usamos appendFile para añadir contenido al final del archivo
    fs.appendFile(nombreArchivo, contenido, 'utf8', (err) => {
        if (err) {
            // Si hay un error al escribir, lo mostramos
            console.error('Error al escribir el archivo -->', err);
        } else {
            // Si la escritura es exitosa, mostramos un mensaje de confirmación
            console.log(`Archivo --> "${nombreArchivo}" guardado exitosamente`);
        }
    });
}

/**
 * Función asíncrona para leer el contenido de un archivo
 * @param {string} nombreArchivo - Nombre del archivo a leer
 * @returns {Promise<string|undefined>} - Promesa que resuelve al contenido del archivo o undefined si hay error
 */
async function leerArchivo(nombreArchivo) {
    try {
        // Intentamos leer el archivo de forma asíncrona usando promesas
        const contenido = await fs.promises.readFile(nombreArchivo, 'utf8');
        // Mostramos el contenido en la consola
        console.log('Contenido del archivo:', contenido);
        return contenido;
    } catch (error) {
        // Si hay un error al leer, lo mostramos
        console.error('Error al leer el archivo:', error.message);
        return undefined;
    }
}

/**
 * Flujo principal del programa:
 * 1. Intentamos leer el archivo
 * 2. Si la lectura es exitosa, leemos de nuevo y añadimos contenido
 */
const lee = leerArchivo(nombreArchivo); // Iniciamos la lectura del archivo

// SUGERENCIA DE MEJORA: El código debería ser así:

leerArchivo(nombreArchivo)
    .then(contenido => {
        if (contenido) {
            escribirArchivo(nombreArchivo, ' --> Este es el contenido del archivo');
        }
    });
