// Este código utiliza el método copyFile de Node.js para copiar el contenido
// de un archivo texto.txt a un nuevo archivo texto2.txt. Si la operación
// es exitosa muestra un mensaje de confirmación, y si falla muestra el error.
// Importamos el método copyFile del módulo fs de Node.js
import {copyFile} from 'node:fs'

// Copiamos el archivo texto.txt a texto2.txt usando el método copyFile
// Recibe como parámetros: archivo origen, archivo destino y callback
copyFile('texto.txt', 'texto2.txt', (err) => {
    // Si ocurre un error durante la copia
    if (err) {
        // Mostramos el error en consola
        console.error('Error al copiar el texto: --> ', err);
    } else {
        // Si la copia fue exitosa mostramos mensaje de éxito
        console.log('*** texto copiado exitosamente de --> texto.txt a --> texto2.txt ***');
    }
});