const express = require("express");
const axios = require("axios");
const router = express.Router();

// con esto creamos el endpoint para obtener todos los personajes
router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    res.json(response.data.results);
  } catch (error) {
    res.status(404).json({ error: "Error al intentar obtener los personajes" });
  }
});

// con esto creamos el endpoint para obtener un personaje indicando el nombre
router.get("/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    if (response.data.results.length > 0) {
      res.json(response.data.results[0]);
    } else {
      res.status(404).json({ error: "Personaje no encontrado" });
    }
  } catch (error) {
    res.status(404).json({ error: "Error en la busqueda" });
  }
});

module.exports = router;
