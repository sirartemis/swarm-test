const express = require('express');
const app = express();
const port = 3000;

// Generar un identificador único para esta instancia
const instanceId = Math.random().toString(36).substring(7);

app.get('/test', (req, res) => {
  res.send(`Hello from instance ${instanceId}`);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
