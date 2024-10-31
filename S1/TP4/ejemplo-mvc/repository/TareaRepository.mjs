// Importamos los módulos necesarios
import fs from "fs"; // Sistema de archivos de Node.js
import path from "path"; // Manejo de rutas de archivos
import { fileURLToPath } from "url"; // Obtener la ruta del archivo actual

// Importamos la interfaz de persistencia y el modelo Tarea
import TareasDataSource from "./TareasDataSource.mjs";
import Tarea from "../models/tarea.mjs";

// Obtener la ruta del archivo de tareas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../tareas.txt");

console.log("Ruta generada:", filePath); // Mostrar la ruta generada

// Verificar si el archivo tareas.txt existe
try {
  fs.accessSync(filePath, fs.constants.F_OK); // Comprobar si el archivo existe
  console.log("El archivo tareas.txt existe.");
} catch (error) {
  console.error("Error: No se encontró el archivo tareas.txt en:", filePath);
}

// Implementación concreta del repositorio extendiendo TareasDataSource
export default class TareaRepository extends TareasDataSource {
  constructor() {
    super(); // Llamada al constructor de la clase base
  }

  // Implementación del método obtenerTodas()
  obtenerTodas() {
    try {
      // Leer el archivo de texto en formato UTF-8
      const data = fs.readFileSync(filePath, "utf-8");
      // Convertir el contenido del archivo en un array de objetos JSON
      const tareas = JSON.parse(data);
      // Convertir cada objeto en una instancia de la clase Tarea
      return tareas.map(
        (tareaData) =>
          new Tarea(
            tareaData.id,
            tareaData.titulo,
            tareaData.descripcion,
            tareaData.completado
          )
      );
    } catch (error) {
      // Si ocurre un error, devolvemos un array vacío y mostramos el error
      console.error("Error al leer el archivo de tareas:", error);
      return [];
    }
  }

  // Implementación del método guardar()
  guardar(tareas) {
    try {
      // Convertimos el array de tareas a una cadena JSON con formato legible
      const data = JSON.stringify(tareas, null, 2);
      // Guardamos la cadena JSON en el archivo de texto
      fs.writeFileSync(filePath, data, "utf-8");
    } catch (error) {
      // Si ocurre un error al guardar los datos, mostramos el error
      console.error("Error al guardar las tareas:", error);
    }
  }

  // Implementación del método eliminar()
  eliminar(id) {
    try {
      // Obtener todas las tareas existentes
      const tareas = this.obtenerTodas();
      // Filtrar las tareas para eliminar la que coincida con el ID
      const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
      // Guardar la lista actualizada de tareas
      this.guardar(tareasActualizadas);
    } catch (error) {
      // Si ocurre un error, mostramos el error
      console.error("Error al eliminar la tarea:", error);
    }
  }
}
