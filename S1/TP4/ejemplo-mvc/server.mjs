// Importamos el framework Express
import express from "express";

// Importamos los controladores
import {
  listarTareasController,
  listarTareasCompletadasController,
  crearTareaController,
  completarTareaController,
  eliminarTareaController,
} from "./controllers/tareaController.mjs";

const app = express(); // Inicializamos la aplicación de Express
const PORT = 3000; // Definimos el puerto en el que escuchará el servidor

// Middleware para permitir el manejo de solicitudes con cuerpo en formato JSON
app.use(express.json());

// Ruta para la URL base
app.get("/", (req, res) => {
  res.send("Bienvenido al servidor de gestión de tareas.");
});

// Rutas
// Ruta para obtener todas las tareas
app.get("/tareas", listarTareasController);

// Ruta para obtener las tareas completadas
app.get("/tareas/completadas", listarTareasCompletadasController);

// Ruta para crear una nueva tarea
app.post("/tareas", crearTareaController);

// Ruta para marcar una tarea como completada
app.put("/tareas/:id/completar", completarTareaController);

// Ruta para eliminar una tarea
app.delete("/tareas/:id", eliminarTareaController);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
