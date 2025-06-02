/**
 * Módulo para manejar operaciones de archivo (lectura y escritura)
 * Este script permite leer y añadir contenido a un archivo de texto
 */
/**
 * Módulo para manejar operaciones de archivo (lectura y escritura)
 * Este script permite leer y añadir contenido a un archivo de texto
 */

// Importamos el módulo fs (filesystem) para operaciones de archivos
const fs = require('fs');

// Definimos el nombre del archivo con el que vamos a trabajar
const nombreArchivo = 'texto.txt';

/**
 * Función para escribir/añadir contenido a un archivo
 * @param {string} nombreArchivo - Nombre del archivo donde se escribirá
 * @param {string} contenido - Contenido que se añadirá al archivo
 * @returns {Promise<boolean>} - Promesa que resuelve a true si la operación fue exitosa
 */
function escribirArchivo(nombreArchivo, contenido) {
    // Retornamos una nueva promesa
    return new Promise((resolve, reject) => {
        // Usamos appendFile para agregar contenido al archivo
        fs.appendFile(nombreArchivo, contenido, 'utf8', (err) => {
            // Si hay error, lo rechazamos
            if (err) {
                console.error('Error al escribir el archivo -->', err);
                reject(err);
            } else {
                // Si todo sale bien, resolvemos con true
                console.log(`Archivo --> "${nombreArchivo}" guardado exitosamente`);
                resolve(true);
            }
        });
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
        // Retornamos el contenido leído
        return contenido;
    } catch (error) {
        // Si hay un error al leer, lo mostramos y retornamos undefined
        console.error('Error al leer el archivo:', error.message);
        return undefined;
    }
}

/**
 * Función para leer una cadena de texto desde la entrada estándar
 * @returns {Promise<string>} - Promesa que resuelve a la cadena leída
 */
function leerCadena() {
    // Retornamos una nueva promesa
    return new Promise((resolve) => {
        // Activamos la entrada estándar
        process.stdin.resume();
        // Configuramos la codificación a utf8
        process.stdin.setEncoding('utf8');
        
        // Escuchamos el evento 'data' una sola vez
        process.stdin.once('data', (data) => {
            // Limpiamos la cadena de espacios y saltos de línea
            const cadena = data.toString().trim();
            // Pausamos la entrada estándar
            process.stdin.pause();
            // Resolvemos la promesa con la cadena leída
            resolve(cadena);
        });
    });
}

/**
 * Función principal que ejecuta el flujo del programa
 */
async function main() {
    try {
        // Solicitamos entrada al usuario
        console.log('Por favor ingresa una cadena:');
        // Esperamos a que el usuario ingrese una cadena
        const cadena = await leerCadena();
        // Mostramos la cadena ingresada
        console.log('La cadena ingresada es:', cadena);
        
        // Preparamos la cadena a escribir con la fecha actual
        const cadenaAEscribir = " hora: ---> " + new Date();
        // Escribimos la cadena en el archivo
        await escribirArchivo(nombreArchivo, cadenaAEscribir + '\n');
        
        // Leemos el contenido actual del archivo
        const contenidoArchivo = await leerArchivo(nombreArchivo);
        // Si el archivo existe y se pudo leer
        if (contenidoArchivo) {
            // Escribimos contenido adicional con la cadena del usuario
            await escribirArchivo(
                nombreArchivo, 
                ' --> Este es el ULTIMO contenido del archivo --> ' + cadena + '\n'
            );
            
            // Leemos el archivo final para mostrar el resultado actualizado
            await leerArchivo(nombreArchivo);
        }
    } catch (error) {
        // Manejamos cualquier error que ocurra en el flujo principal
        console.error('Error en el flujo principal:', error);
    }
}

// Ejecutamos la función principal
main();
// Importamos el módulo fs (filesystem) para operaciones de archivos
const fs = require('fs');

// Definimos el nombre del archivo con el que vamos a trabajar
const nombreArchivo = 'texto.txt';

/**
 * Función para escribir/añadir contenido a un archivo
 * @param {string} nombreArchivo - Nombre del archivo donde se escribirá
 * @param {string} contenido - Contenido que se añadirá al archivo
 * @returns {Promise<boolean>} - Promesa que resuelve a true si la operación fue exitosa
 */
function escribirArchivo(nombreArchivo, contenido) {
    return new Promise((resolve, reject) => {
        fs.appendFile(nombreArchivo, contenido, 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir el archivo -->', err);
                reject(err);
            } else {
                console.log(`Archivo --> "${nombreArchivo}" guardado exitosamente`);
                resolve(true);
            }
        });
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
 * Función para leer una cadena de texto desde la entrada estándar
 * @returns {Promise<string>} - Promesa que resuelve a la cadena leída
 */
function leerCadena() {
    return new Promise((resolve) => {
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        
        process.stdin.once('data', (data) => {
            const cadena = data.toString().trim();
            process.stdin.pause();
            resolve(cadena);
        });
    });
}

/**
 * Función principal que ejecuta el flujo del programa
 */
async function main() {
    try {
        // Ejemplo de uso con async/await para leer entrada del usuario
        console.log('Por favor ingresa una cadena:');
        const cadena = await leerCadena();
        console.log('La cadena ingresada es:', cadena);
        
        // Escribir la cadena ingresada en el archivo
        const cadenaAEscribir = " hora: ---> " + new Date();
        await escribirArchivo(nombreArchivo, cadenaAEscribir + '\n');
        
        // Leer el archivo y añadir más contenido si existe
        const contenidoArchivo = await leerArchivo(nombreArchivo);
        if (contenidoArchivo) {
            await escribirArchivo(
                nombreArchivo, 
                ' --> Este es el ULTIMO contenido del archivo --> ' + cadena + '\n'
            );
            
            // Leer el archivo final para mostrar el resultado
            await leerArchivo(nombreArchivo);
        }
    } catch (error) {
        console.error('Error en el flujo principal:', error);
    }
}

// Ejecutar el programa
main();