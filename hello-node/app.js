const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('¡Hola Mundo desde OpenShift!\n');
});

app.listen(port, () => {
    console.log(`App corriendo en el puerto ${port}`);
});