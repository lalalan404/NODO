import fs from "fs";

// clase para representar un superheroe

class Superheroe {
  constructor(
    id,
    nombreSuperheroe,
    nombreReal,
    nombreSociedad,
    edad,
    planetaOrigen,
    debilidad,
    poder,
    habilidadEspecial,
    aliado,
    enemigo
  ) {
    this.id = id;
    this.nombreSuperheroe = nombreSuperheroe;
    this.nombreReal = nombreReal;
    this.nombreSociedad = nombreSociedad;
    this.edad = edad;
    this.planetaOrigen = planetaOrigen;
    this.debilidad = debilidad;
    this.poder = poder;
    this.habilidadEspecial = habilidadEspecial;
    this.aliado = aliado;
    this.enemigo = enemigo;
  }
}

//Ordenar por nombre de superheroe
export function leerListaSuperheroes(ListaSuperheroes) {
  const datos = fs.readFileSync(ListaSuperheroes, "utf8");
  const ListaSuperheroesArray = JSON.parse(datos);

  //convertir a intancias de superheroe
  const superheroes = ListaSuperheroesArray.map(
    (hero) =>
      new Superheroe(
        hero.id,
        hero.nombreSuperheroe,
        hero.nombreReal,
        hero.nombreSociedad,
        hero.edad,
        hero.planetaOrigen,
        hero.debilidad,
        hero.poder,
        hero.habilidadEspecial,
        hero.aliado,
        hero.enemigo
      )
  );

  //ordenar por nombre de superheroe
  superheroes.sort((a, b) =>
    a.nombreSuperheroe.localeCompare(b.nombreSuperheroe)
  );

  return superheroes;
}

//nueva funcion para agregar superheroes
export function agregarSuperheroes(ListaSuperheroes, agregarSuperheroes) {
  const datosOriginales = fs.readFileSync(ListaSuperheroes, "utf8");
  const datosNuevos = fs.readFileSync(agregarSuperheroes, "utf8");

  const superheroesOriginales = JSON.parse(datosOriginales);
  const nuevosSuperheroes = JSON.parse(datosNuevos);

  //convertir los nuevos superheroes a instancias de superheroe
  const instanciasNuevos = nuevosSuperheroes.map(
    (hero) =>
      new Superheroe(
        hero.id,
        hero.nombreSuperheroe,
        hero.nombreReal,
        hero.nombreSociedad,
        hero.edad,
        hero.planetaOrigen,
        hero.debilidad,
        hero.poder,
        hero.habilidadEspecial,
        hero.aliado,
        hero.enemigo
      )
  );

  //combinar listas
  const listaActualizada = [...superheroesOriginales, ...instanciasNuevos];

  //guardar la lista actualizada
  fs.writeFileSync(
    ListaSuperheroes,
    JSON.stringify(listaActualizada, null, 2),
    "utf8"
  );
  console.log("La lista de superheroes se actualizo con exito.");
}
