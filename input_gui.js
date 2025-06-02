const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<form action="/submit" method="POST"><input type="text" name="dato"><button type="submit">Enviar</button></form>');
});

app.post('/submit', (req, res) => {
    res.send(`Dato recibido: ${req.body.dato}`);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
