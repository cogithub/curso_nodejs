const http = require('http');

const HOST = 'localhost:3000';
// global.PORT = HOST.split(':')[1]; // Extraer el puerto de la cadena HOST
global.PORT =3000;
const server = http.createServer((req, res) => {
   
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`*** Servidor en funcionamiento\n*** Servidor funcionando en ${HOST}`);
});

server.listen(global.PORT, () => {
    console.log(`Servidor corriendo en : ${HOST}`);
});

