const express = require('express');
const axios = require('axios');
const app = express();

// Llama al backend usando el DNS interno de OpenShift: http://<nombre-del-servicio>:<puerto>
const BACKEND_URL = process.env.BACKEND_URL || 'http://backend-svc:8080/api/data';

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(BACKEND_URL);
        res.send(`Frontend Node.js consumiendo del Backend -> Estado: ${response.data.status}, Desde: ${response.data.origen}\n`);
    } catch (error) {
        res.status(500).send(`Error conectando al backend: ${error.message}\n`);
    }
});

app.listen(8080);