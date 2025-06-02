// Importa el módulo 'express' para crear un servidor web en Node.js
var express = require('express');

// Inicializa una instancia de Express
var app = express();

// Define una variable global 'PORT' que toma el valor del puerto especificado en el entorno 
// o usa el puerto 3000 por defecto si no está definido
global.PORT = process.env.PORT || 3000; 

// Crea un mensaje dinámico con el puerto que se está utilizando
const mensaje = `*** Hola mundo, estás conectado por el verbo POST al server LOCALHOST por el puerto ${global.PORT}`;

// Configura una ruta en el servidor que responde a cualquier tipo de solicitud ('GET', 'POST', etc.) en la raíz ('/')
app.all('/', (pet, res) => {
    // Imprime el mensaje en la consola del servidor
    console.log(`${mensaje}`);
    
    // Envía el mensaje como respuesta al cliente
    // res.writeHead(`${mensaje}`);
    res.writeHead(200,{'content-type' : 'text/plain'});
	const ip=lientIp = res.ip; // IP del cliente
});

// La línea `app.post` está incompleta y no tiene una función asociada.
// Si deseas manejar solicitudes POST, debería ser algo como:
// app.post('/', (req, res) => { ... });

app.get('/persona', (req, res) => {
    const { nombre, edad, email } = req.query;
    if (!nombre || !edad || !email) {
        return res.status(400).send('*** Todos los campos son requeridos.');
    }
    res.send(`*** Datos recibidos: Nombre: ${nombre}, Edad: ${edad}, Email: ${email}`);
});

// Inicia el servidor y lo hace escuchar en el puerto definido
const servidor = app.listen(global.PORT, () => {
    // No hay lógica dentro de la función de callback, pero podrías agregar:
    // console.log(`Servidor escuchando en el puerto ${global.PORT}`);
});
