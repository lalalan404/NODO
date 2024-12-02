//superheroesController.mjs
import {
  obtenerSuperheroePorId,
  obtenerTodosLosSuperheroes,
  buscarSuperheroesPorAtributo,
  obtenerSuperheroesMayoresDe30,
  obtenerSuperheroesMayoresDeEdad,
} from "../services/superheroesService.mjs";

import {
  renderizarSuperheroe,
  renderizarListaSuperheroes,
} from "../views/responseView.mjs";

export async function obtenerSuperheroePorIdController(req, res) {
  const { id } = req.params;
  const superheroe = await obtenerSuperheroePorId(id);

  if (superheroe) {
    res.send(renderizarSuperheroe(superheroe));
  } else {
    res.status(404).send({ mensaje: "Superhéroe no encontradoooooo" });
  }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
  const superheroes = await obtenerTodosLosSuperheroes();
  res.send(renderizarListaSuperheroes(superheroes));
}

export async function buscarSuperheroesPorAtributoController(req, res) {
  const { atributo, valor } = req.params;
  const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);

  if (superheroes.length > 0) {
    res.send(renderizarListaSuperheroes(superheroes));
  } else {
    res
      .status(404)
      .send({ mensaje: "No se encontraron superhéroes con ese atributo" });
  }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
  const superheroes = await obtenerSuperheroesMayoresDe30();
  res.send(renderizarListaSuperheroes(superheroes));
}

///-------------------------------------------------------------------------------------//
export async function obtenerSuperheroesMayoresDeEdadController(req, res) {
  const { edad } = req.params;

  try {
    const edadMinima = parseInt(edad, 10);
    if (isNaN(edadMinima)) {
      return res
        .status(400)
        .send({ mensaje: "La edad debe ser un número válido" });
    }

    const superheroes = await obtenerSuperheroesMayoresDeEdad(edadMinima);
    res.send(superheroes);
  } catch (error) {
    res.status(500).send({ mensaje: "Error al obtener superhéroes", error });
  }
}
