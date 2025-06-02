const http = require('http');
const { exec } = require('child_process');
const { property } = require('lodash');
const HOST = 'localhost:3000';
const PORT = 3000; // Opción alternativa
//  comentada
// exec('date "+%I:%M %p %d-%m-%Y"', (error, stdout, stderr) => {
//     global.STDOUT = stdout;
//     console.log("entro1");
// });
const server = http.createServer((req, res) => {
    // Configurar la cabecera de la respuesta con código 200 y tipo de contenido
    // console.log("entro2");
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.write(`1 Servidor OK.. \n`)
});

// const fechaActual = new Date();
server.listen(3000, () => {
    // console.log("entro3");
    console.log(`2 *** alguien ocupa en ${HOST} `);
});



