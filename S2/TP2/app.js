const mongoose = require("mongoose");

// Configuración de conexión a MongoDB
mongoose
  .connect(
    "mongodb+srv://Grupo-11:grupo11@cursadanodejs.ls9ii.mongodb.net/Node-js",
    {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Conexión exitosa a MongoDB"))
  .catch((error) => console.error("Error al conectar a MongoDB:", error));

//-------------paso 2-----------------------------------------------------------------------------------

// Definición del esquema para SuperHero
const superheroSchema = new mongoose.Schema(
  {
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: "Desconocido" },
    debilidad: { type: String },
    poderes: { type: [String] },
    aliados: { type: [String] },
    enemigos: { type: [String] },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "Grupo-11" } // se agrega debido a que ya se creo collection Grupo-11.
);

// Creación del modelo SuperHero basado en el esquema
const SuperHero = mongoose.model("SuperHero", superheroSchema);

//----------------------------paso 3--------------------------------
async function insertSuperHero() {
  const hero = new SuperHero({
    nombreSuperHeroe: "Spiderman",
    nombreReal: "Peter Parker",
    edad: 25,
    planetaOrigen: "Tierra",
    debilidad: "Radioactiva",
    poderes: ["Trepar paredes", "Sentido arácnido", "Super fuerza", "Agilidad"],
    aliados: ["Ironman"],
    enemigos: ["Duende Verde"],
  });

  await hero.save();
  console.log("Superhéroe insertado:", hero);
}
insertSuperHero();

//------------------------paso 4------------------------
async function updateSuperHero(nombreSuperHeroe) {
  const result = await SuperHero.updateOne(
    { nombreSuperHeroe: "Ironman" }, // Condición para encontrar el héroe
    { $set: { edad: 100 } } // Actualización: establece edad en   100
  );

  console.log("Resultado de la actualización:", result);
}

updateSuperHero("Spiderman");

//------------------paso 5------------------------------
async function deleteSuperHero(nombreSuperHeroe) {
  const result = await SuperHero.deleteOne({
    nombreSuperHeroe: nombreSuperHeroe,
  });
  console.log("Superhéroe eliminado:", result);
}

deleteSuperHero("Spiderman");

//-------------------------paso 6-------------------------

async function findSuperHeroes() {
  const heroes = await SuperHero.find({ planetaOrigen: "Tierra" });
  console.log("Superhéroes encontrados:", heroes);
}

findSuperHeroes();
