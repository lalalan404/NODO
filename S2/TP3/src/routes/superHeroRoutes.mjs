//superHeroRoutes.mjs
import express from "express";
import {
  obtenerSuperheroePorIdController,
  obtenerTodosLosSuperheroesController,
  buscarSuperheroesPorAtributoController,
  obtenerSuperheroesMayoresDe30Controller,
  obtenerSuperheroesMayoresDeEdadController,
} from "../controllers/superheroesController.mjs";

const router = express.Router();

router.get("/heroes", obtenerTodosLosSuperheroesController);
router.get(
  "/heroes/buscar/:atributo/:valor",
  buscarSuperheroesPorAtributoController
);
router.get("/heroes/mayores-30", obtenerSuperheroesMayoresDe30Controller);
router.get("/heroes/:id", obtenerSuperheroePorIdController);
//----------------------------------------------------------seagrego---------------------------------//
router.get("/heroes/mayores/:edad", obtenerSuperheroesMayoresDeEdadController);

export default router;
