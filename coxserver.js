const express = require('express'); // 🔮 Traemos una caja mágica llamada Express para construir nuestro servidor
const app = express(); // 🏗️ Usamos la caja mágica para crear nuestro servidor
const path = require('path'); // 🗺️ Traemos ayuda para manejar rutas y encontrar archivos
const router = required('express.router');
// Configuración básica
app.use(express.json()); // 📜 Le decimos al servidor que entienda mensajes en formato JSON, como si fueran cartas con información
app.use(express.urlencoded({ extended: false })); // ✍️ También le permitimos entender mensajes escritos, como cuando llenamos un formulario

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('productos', { title: 'Express' });
});
app.use(express.static(path.join(__dirname, 'public'))); // 🏡 Guardamos nuestros dibujos y fotos en una carpeta llamada "public" para que todos puedan verlos

// Ruta principal usando app.all()
app.all('/', (req, res) => { // 🚪 Capturamos cualquier tipo de petición (GET, POST, PUT, DELETE), como cuando un amigo nos pregunta cosas diferentes
    res.send('*** ¡Hola! Esta ruta responde a / cualquier método HTTP'); // 👋 Respondemos con un mensaje amistoso sin importar cómo nos saludaron
});

// Ruta para manejar solicitudes POST después de app.all()
app.post('/', (req, res) => { // 📩 Si alguien nos manda información con POST...
    const recibido = req.body; // 📝 Guardamos lo que nos enviaron, como una carta con datos
    console.log('*** Datos recibidos: por POST /', recibido); // 📢 Mostramos los datos en la consola, como cuando le contamos a un amigo lo que nos dijeron
    res.json({ mensaje: 'Datos recibidos correctamente', datos: recibido }); // 💌 Enviamos una respuesta en formato JSON para confirmar que todo llegó bien
});

// Manejador de errores 404
app.use((req, res, next) => { // 🚦 Si alguien trata de visitar una página que no existe...
    res.status(404).send('*** ¡Ups! Página no encontrada'); // ❌ Mostramos un mensaje de error
}); // 🔧 Cerramos correctamente la función antes de continuar

// Puerto de escucha
const PORT = process.env.PORT || 3000; // 🔢 Elegimos un número mágico (puerto) para que nuestro servidor funcione. Si no hay uno, usamos el 3000.
app.listen(PORT, () => { // 👂 Le decimos al servidor que esté atento en ese número mágico...
    console.log(`*** ¡Servidor iniciado en el puerto ${PORT}!`); // 🚀 Cuando todo está listo, avisamos diciendo "¡Estoy listo para jugar!"
});
