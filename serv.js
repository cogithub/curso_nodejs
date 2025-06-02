// Importar el módulo http de Node.js para crear un servidor web
const http = require('http');

// Definir la dirección del host y puerto
// const HOST = 'localhost'; // Opción alternativa comentada
const HOST = 'localhost:3000';
const PORT = HOST.split(':')[1]; // Extraer el puerto de la cadena HOST
// const PORT = 3000; // Opción alternativa comentada
// PORT=parseInt(PORT,10); // Opción para convertir el puerto a número entero

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
    const fechaActual = new Date();

    // Configurar la cabecera de la respuesta con código 200 y tipo de contenido
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.write(`Servidor OK.. \n`)
    // Enviar la respuesta al cliente
    // res.end(`*** Servidor en funcionamiento\n*** Servidor funcionando en ${HOST}:${PORT}`); // Opción alternativa comentada
    // res.end(`alguien ocupa el nevagador en fecha: ${fechaActual.getFullYear()}/${fechaActual.getMonth() + 1}/${fechaActual.getDate()}-${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}\n`);
});

// Iniciar el servidor y escuchar en el puerto especificado
const fechaActual = new Date();
server.listen(PORT, () => {
    console.log(`Servidor corriendo en ${HOST}`);
    console.log(`alguien ocupa el nevagador en fecha: ${fechaActual.getFullYear()}/${fechaActual.getMonth() + 1}/${fechaActual.getDate()}-${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`)
});



