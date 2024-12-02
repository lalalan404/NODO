// app.mjs

import express from "express";
import { connectDB, verificarDocumentos } from "./config/dbConfig.mjs";
import superHeroRoutes from "./routes/superHeroRoutes.mjs";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Conecta a MongoDB y verifica documentos
//connectDB();
verificarDocumentos(await connectDB());

// Configuración de rutas
app.use("/api", superHeroRoutes);

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).send({ mensaje: "Ruta no encontrada" });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
