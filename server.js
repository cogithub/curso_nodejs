// Importación de módulos necesarios
const express = require('express');              // Framework para crear aplicaciones web
const app = express();                          // Creación de la aplicación Express
const readline = require('readline');           // Módulo para interactuar con la consola
const fs = require('fs');                       // Módulo para trabajar con el sistema de archivos

// Definición de variables
const filePath = 'ruta.txt';                    // Ruta del archivo donde se guardará la URL
const ruta = fs.readFileSync(filePath, 'utf8'); // Lee el contenido del archivo

// Muestra la ruta actual del archivo
console.log("*** ruta de archivo :", ruta);

// Manejo de la ruta principal '/'
app.get('/', (req, res) => {
  // Creación de la interfaz de lectura para la consola
  const rl = readline.createInterface({
    input: process.stdin,                       // Entrada estándar
    output: process.stdout                      // Salida estándar
  });

  // Solicita al usuario que ingrese una ruta
  rl.question('indique la ruta ? ', (ruta) => {
    // Escribe la ruta en el archivo
    fs.writeFile(filePath, ruta, (err) => {
      if (err) {
        // Manejo de errores en la escritura
        console.error('*** ocurrio un error al escribir:', err);
      } else {
        // Almacena la ruta en una variable global y muestra mensajes de éxito
        global.miVariable = ruta;               // Almacena la ruta en una variable global
        console.log('*** Archivo guardado correctamente.');
        console.log('*** dirigiendome a : ', global.miVariable);
      }
    });
  });

  // Redirige al usuario a la URL especificada
  res.redirect(`http://${global.miVariable}`);
});

// Configuración del servidor
const PORT = 3000;                             // Puerto donde correrá el servidor
app.listen(PORT, () => {
  // Mensaje de confirmación cuando el servidor está en funcionamiento
  // console.log(`\nServidor web corriendo en ${global.miVariable}`);
});
