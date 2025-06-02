import { createServer } from 'node:http';

// Definimos el host y puerto correctamente
// const HOST = 'localhost:3000';
const HOST = 'localhost';
// const HOST = 'localhost:3000';
// const PORT = HOST.split(':')[1];
// PORT=parseInt(PORT,10);
const PORT = 3000;

// Creamos el servidor
const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`*** Servidor en funcionamiento\n*** Servidor funcionando en ${HOST}:${PORT}`);


});

// Iniciamos el servidor en el puerto correcto
// server.listen(PORT, HOST, () => {
server.listen(PORT, () => {
    // console.log(`*** Servidor funcionando en http://${HOST}:${PORT}`);

});
