import { leerListaSuperheroes, agregarSuperheroes } from "./utils.mjs";

const archivoOriginal = "./ListaSuperheroes.txt";
const archivoNuevos = "./agregarSuperheroes.txt";

//agregar nuevos superheroes
agregarSuperheroes(archivoOriginal, archivoNuevos);

//leer y mostrar la lista de superheroes ordenada
const superheroes = leerListaSuperheroes(archivoOriginal);
console.log("Superheroes ordenados:");
console.log(superheroes);
