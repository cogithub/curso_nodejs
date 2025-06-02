import { copyFile, unlink } from 'fs/promises';
import { exit } from 'process';
import { readdir } from 'fs/promises';
import { resolve } from 'path';

console.clear();

/**
 * Lista los archivos en un directorio que comienzan con 'texto'
 * @param {string} ruta - Ruta del directorio a listar
 * @returns {Promise<string[]>} - Lista de archivos filtrados
 */
async function listarDirectorio(ruta = '.') {
  try {
    const rutaAbsoluta = resolve(ruta);
    const archivos = await readdir(rutaAbsoluta);

    // Filtrar archivos que comiencen con "texto"
    const archivosFiltrados = archivos.filter(archivo => archivo.startsWith('texto'));
    
    archivosFiltrados.forEach(archivo => console.log(archivo));
    
    return archivosFiltrados;
  } catch (error) {
    console.error(`Error al listar el directorio: ${error.message}`);
    return [];
  }
}

/**
 * Copia un archivo de origen a destino
 * @param {string} origen - Ruta del archivo origen
 * @param {string} destino - Ruta del archivo destino
 */
const copiarArchivo = async (origen, destino) => {
  try {
    await copyFile(origen, destino);
    console.log(`*** Archivo copiado exitosamente de ${origen} a ${destino}`);
    await listarDirectorio();
    eliminarArchivo(destino);
  } catch (error) {
    console.error(`*** Error al copiar el archivo: ${error.message}`);
    exit(1);
  }
};

/**
 * Elimina un archivo
 * @param {string} ruta - Ruta del archivo a eliminar
 */
const eliminarArchivo = async (ruta) => {
  try {
    await unlink(ruta);
    console.log(`*** Archivo eliminado exitosamente: ${ruta}`);
    await listarDirectorio();
  } catch (error) {
    console.error(`*** Error al eliminar el archivo: ${error.message}`);
  }
};

// Ejemplo de uso
const main = async () => {
  try {
    await copiarArchivo('texto.txt', 'texto2.txt');
    // Si quieres eliminar un archivo, descomenta la siguiente línea

  } catch (error) {
    console.error('Error en la ejecución:', error);
    exit(1);
  }
};

main();