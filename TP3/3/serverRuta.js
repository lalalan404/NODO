const express = require("express");
const app = express();
const PORT = 3000;

// Ruta GET con parámetro de ruta
// Solicitud: http://localhost:3000/user/123
app.get("/user/:id", (req, res) => {
  const userid = req.params.id;
  console.log(`ID del usuario recibido: ${userid}`);
  res.send(`Perfil del usuario con ID: ${userid}`);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
