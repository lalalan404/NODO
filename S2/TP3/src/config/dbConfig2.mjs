// dbConfig.mjs
import mongoose from "mongoose";

// Función asíncrona para conectar a MongoDB
export async function connectDB() {
  try {
    // Intento de conexión a la base de datos usando Mongoose
    await mongoose.connect(
      "mongodb+srv://Grupo-11:grupo11@cursadanodejs.ls9ii.mongodb.net/Node-js",
      {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      }
    );
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1); // Termina el proceso si ocurre un error
  }
}
