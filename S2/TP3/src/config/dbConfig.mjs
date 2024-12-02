//dbConfig.mjs
import mongoose from "mongoose";

// Función asíncrona para conectar a MongoDB
export async function connectDB() {
  try {
    // Intento de conexión a la base de datos usando Mongoose
    await mongoose.connect(
      "mongodb+srv://Grupo-11:grupo11@cursadanodejs.ls9ii.mongodb.net/Node-js",
      {
        //  useNewUrlParser: true, // Utiliza el nuevo analizador de URL de MongoDB
        //  useUnifiedTopology: true, // Utiliza el nuevo motor de topología de MongoDB
      }
    );
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    // Captura errores de conexión y los muestra en consola
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1); // Termina el proceso si ocurre un error
  }
}

//Función para verificar documentos en la colección
export async function verificarDocumentos() {
  try {
    const collection = mongoose.connection.db.collection("Grupo-11");
    const documents = await collection.find().limit(5).toArray();
    console.log("Documentos encontrados en 'Grupo-11':", documents);
  } catch (error) {
    console.error("Error al obtener documentos:", error);
  }
}
