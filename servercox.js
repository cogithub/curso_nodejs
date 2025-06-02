const express = require('express');
const app = express()
const events = require('events'); // ✅ Sin 'node:', solo 'events'

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/datos', async (req, res) => {
  try {
    // Validar que req.body no esté vacío
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        error: 'El cuerpo de la petición está vacío'
      });
    }

    console.log('Datos recibidos:', req.body);
    
    return res.status(200).json({
      success: true,
      message: 'Datos recibidos correctamente',
      data: req.body
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Error interno del servidor'
    });
  }
});

app.listen(PORT, () => console.log(`Servidor iniciado en puerto ${PORT}`));
