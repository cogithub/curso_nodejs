// Importación de módulos necesarios del sistema de archivos y manejo de rutas
/* import { repeat } from 'lodash';
import { copyFile, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import readline from 'readline'; */

import lod from 'lodash';
import { copyFile, unlink } from 'fs/promises';
import { join } from 'path';
import readline from 'readline';
// import chalk from 'chalk';
// const _ = require('lodash'); // Importando correctamente en CommonJS



// Configuración de directorios para origen y destino de archivos
const dirOrigen = '/Users/carlosocando/Documents/pre_nodejs/curso-de-nodejs/5.lectura de archivos/';
const dirDestino = dirOrigen; // Mismo directorio para origen y destino

/**
 * Solicita al usuario el nombre del archivo origen mediante consola
 * Crea una interfaz de lectura para entrada/salida estándar
 * Devuelve una promesa que resuelve con la ruta completa del archivo
 * @returns {Promise<string>} Nombre del archivo origen con ruta completa
 */
function obtenerNombreArchivoOrigen() {
  // Crear interfaz de lectura
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Retornar promesa con el proceso de obtención del nombre
  return new Promise((resolve) => {
    rl.question('Ingresa el nombre del archivo origen: ', (nombreArchivo) => {
      console.log(`Archivo origen: "${nombreArchivo}"`);
      rl.close();
      resolve(join(dirOrigen, nombreArchivo));
    });
  });
}

/**
 * Solicita al usuario el nombre del archivo destino mediante consola
 * Crea una interfaz de lectura para entrada/salida estándar
 * Devuelve una promesa que resuelve con la ruta completa del archivo
 * @returns {Promise<string>} Nombre del archivo destino con ruta completa
 */
function obtenerNombreArchivoDestino() {
  // Crear interfaz de lectura
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Retornar promesa con el proceso de obtención del nombre
  return new Promise((resolve) => {
    rl.question('Ingresa el nombre del archivo destino: ', (nombreArchivo) => {
      console.log(`Archivo destino: "${nombreArchivo}"`);
      rl.close();
      resolve(join(dirDestino, nombreArchivo));
    });
  });
}

/**
 * Pregunta al usuario si desea eliminar el archivo copiado
 * Crea una interfaz de lectura para entrada/salida estándar
 * Devuelve una promesa que resuelve con true si el usuario responde 's'
 * @returns {Promise<boolean>} True si el usuario desea eliminar el archivo
 */
function preguntarEliminar() {
  // Crear interfaz de lectura
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Retornar promesa con la decisión del usuario
  return new Promise((resolve) => {
    rl.question('¿Desea eliminar el archivo copiado? (s/n): ', (respuesta) => {
      rl.close();
      resolve(respuesta.toLowerCase() === 's');
    });
  });
}

/**
 * Copia un archivo desde una ubicación origen a una destino
 * Utiliza el módulo fs/promises para operaciones asíncronas de archivo
 * Maneja errores y muestra mensajes de estado
 * @param {string} origen - Ruta completa del archivo origen
 * @param {string} destino - Ruta completa del archivo destino
 * @returns {Promise<boolean>} True si la operación fue exitosa
 */
async function copiarArchivo(origen, destino) {
  try {
    // Intentar copiar el archivo
    await copyFile(origen, destino);
    console.log(`*** Archivo copiado exitosamente de ${origen} a ${destino}`);
    return true;
  } catch (error) {
    // Manejar error en caso de fallo
    console.error(`*** Error al copiar el archivo: ${error.message}`);
    throw error;
  }
}

/**
 * Elimina un archivo especificado
 * Utiliza el módulo fs/promises para operaciones asíncronas de archivo
 * Maneja errores y muestra mensajes de estado
 * @param {string} ruta - Ruta del archivo a eliminar
 * @returns {Promise<boolean>} True si la operación fue exitosa
 */
async function eliminarArchivo(ruta) {
  try {
    // Intentar eliminar el archivo
    await ue (ruta);
    console.log(`*** Archivo eliminado exitosamente: ${ruta}`);
    return true;
  } catch (error) {
    // Manejar error en caso de fallo
    console.error(`*** Error al eliminar el archivo: ${error.message}`);
    throw error;
  }
}

/**
 * Función principal que coordina todo el proceso de copia y eliminación
 * Maneja el flujo completo de la aplicación de forma asíncrona
 * Incluye manejo de errores para cada operación
 */
async function main() {
  try {
    // Obtener rutas de archivos del usuario
    const rutaOrigen = await obtenerNombreArchivoOrigen();
    const rutaDestino = await obtenerNombreArchivoDestino();
    
    // Realizar la copia del archivo
    await copiarArchivo(rutaOrigen, rutaDestino);
    
    // Consultar si se debe eliminar el archivo
    const deseaEliminar = await preguntarEliminar();
    
    // Procesar la eliminación según la respuesta del usuario
    if (deseaEliminar) {
      await eliminarArchivo(rutaDestino);
    } else {
      console.log('*** El archivo copiado no será eliminado.');
    }
    
    console.log('*** Proceso completado con éxito.');
  } catch (error) {
    // Manejar cualquier error durante el proceso
    console.error('*** Error en el proceso:', error.message);
  }
}

// Iniciar la ejecución del programa y manejar errores fatales
main().catch(error => {
  console.error('*** Error fatal en la aplicación:', error);
  process.exit(1);
});
