// Importar módulos necesarios
const http = require('http'); // Módulo HTTP para crear servidor web
const { exec } = require('child_process'); // Módulo para ejecutar comandos del sistema
const HOST = 'localhost:3000'; // Definir host y puerto
const PORT = HOST.split(':')[1]; // Extraer el puerto de la cadena HOST
const { property } = require('lodash'); // Importar función property de lodash
const { stdout } = require('process'); // Importar stdout del proceso

// Ejecutar comando para obtener fecha/hora del sistema
exec('date "+%I:%M %p %d-%m-%Y"', (error, stdout, stderr) => {
    global.STDOUT = stdout; // Guardar salida en variable global
    console.log(`*** obteniendo fecha ${global.STDOUT}`); // Mostrar fecha obtenida
});

// Crear servidor HTTP
const server = http.createServer((req, res) => {
    // Configurar cabecera de respuesta con código 200 y tipo de contenido texto plano
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Escribir mensaje de bienvenida al usuario
    res.write('*** Hola, Carlos! Tu servidor Node.js esta funcionando correctamente.');
    // Finalizar respuesta HTTP incluyendo la fecha/hora actual del sistema
    res.write(`\n*** fecha1 : ${global.STDOUT}`);
    res.end(`*** el navegador pide : ${req.url}`);
    console.log(`*** el navegador pide : ${req.url}`);



});

// Iniciar servidor y escuchar en el puerto especificado
server.listen(PORT, (req,res) => {
    console.log("*** haciendo listen..."); // Indicar que el servidor está iniciando
    console.log(`*** Servidor corriendo en http://localhost:${PORT}`); // Mostrar URL del servidor

});
