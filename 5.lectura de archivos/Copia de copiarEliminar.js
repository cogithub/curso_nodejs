// Importación de módulos necesarios
import { copyFile, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import readline from 'readline';

const dirDestino = '/Users/carlosocando/Documents/pre_nodejs/curso-de-nodejs/5.lectura de archivos/';
const dirOrigen = dirDestino
const nombreArchivoDestino = '/Users/carlosocando/Documents/pre_nodejs/curso-de-nodejs/5.lectura de archivos/';
const rutaDestino = join(dirDestino, nombreArchivoDestino);

// Creación de la interfaz de lectura/escritura
/**
 * Función para obtener el nombre del archivo destino del usuario
 * @returns {Promise<string>} Nombre del archivo ingresado por el usuario
 */
function obtenerNombreArchivo() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question('Ingresa el nombre del archivo destino : ', (nombreArchivoDestino) => {
            console.log(`La cadena almacenada es: "${nombreArchivoDestino}"`);
            rl.close();
            resolve(nombreArchivoDestino);
        });
    });
    }



async function copiarArchivo(nombreArchivoOrigen, nombreArchivoDestino) {
    try {
        await copyFile(nombreArchivoOrigen, nombreArchivoDestino);
        console.log(`*** Archivo copiado exitosamente de ${nombreArchivoOrigen} a ${nombreArchivoDestino}`);
        return true;
    } catch (error) {
        console.error(`*** Error al copiar el archivo: ${error.message}`);
        throw error;
    }
}


async function eliminarArchivo(ruta) {
    try {
        await unlink(ruta);
        console.log(`*** Archivo eliminado exitosamente: ${ruta}`);
        return true;
    } catch (error) {
        console.error(`*** Error al eliminar el archivo: ${error.message}`);
        throw error;
    }
}

/**
 * Función principal que ejecuta el flujo del programa
 * - Obtiene el nombre del archivo
 * - Copia el archivo
 * - Pregunta si se desea eliminar el archivo copiado
 */
async function main() {
    try {
        async function obtenerNombreArchivo(callback) {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.question('¿Cuál es el nombre del archivo destino ?? ', (nombreArchivoOrigen, nombreArchivoDestino) => {
                console.log(`*** cadena capturada es: --> "${nombreArchivoDestino}"`);
                rl.close();
                // callback(nombreArchivoDestino);
                // Llamada a la función
                copiarArchivo(nombreArchivoOrigen, nombreArchivoDestino);
                gestionarArchivo();

            });
        }

        async function gestionarArchivo() {
            try {
                const nombreOrigen = await obtenerNombreArchivo();
                await copiarArchivo(nombreOrigen, nombreArchivoDestino);

                console.log('*** ¿Desea eliminar el archivo copiado? (s/n)');

                // Respuesta hardcodeada (debería venir del input del usuario)
                const respuesta = 's';

                if (respuesta.toLowerCase() === 's') {
                    await eliminarArchivo(rutaDestino);
                } else {
                    console.log('*** El archivo copiado no será eliminado.');
                }
            } catch (error) {
                console.error('*** Error en el proceso:', error);
            }
        }




        //     // const nombreOrigen = await obtenerNombreArchivo();
        //     // await copiarArchivo(nombreArchivoOrigen, nombreArchivoDestino);

        //     console.log('*** ¿Desea eliminar el archivo copiado? (s/n)');

        //     // Respuesta hardcodeada (debería venir del input del usuario)
        //     const respuesta = 's';

        //     if (respuesta.toLowerCase() === 's') {
        //         await eliminarArchivo(rutaDestino);
        //     } else {
        //         console.log('*** El archivo copiado no será eliminado.');
        //     }
        // } catch (error) {
        //     console.error('*** Error en el proceso:', error);
        // }
    }

// Ejecución de la función principal con manejo de errores fatales
main().catch(error => {
        console.error('*** Error fatal en la aplicación:', error);
        process.exit(1);
    })};
