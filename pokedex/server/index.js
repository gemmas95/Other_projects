const express = require("express");
const debug = require("debug")("app");

const mongoose = require("mongoose");
const PokemonModel = require("./pokemonModel");
require("dotenv").config();

const app = express();

const PORT = 3002;
// const pokemonList = require("./pokemon.mock");

mongoose.connect(process.env.MONGO, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  debug(`Conected to mongo successfully!`);
});

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

// FUNCTION TO HANDLE PAGINATION
function paginatedResults(model) {
  // The result of this function has to be another function that have to have req, res and next
  return async (req, res, next) => {
    const page = +req.query.page;
    const limit = +req.query.limit;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    // Creamos un objeto que nos dará toda la info
    const results = {};

    // Creamos una propiedad 'next' que nos informará de cuál será la siguiente pagina, si existe
    if (endIndex < (await model.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit,
      };
    }

    // Creamos una propiedad 'previos' que nos informará de cuál será la anterior pagina, si existe
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit,
      };
    }

    // Creamos una propiedad 'total' que nos informará del numero total de archivos
    results.total = await model.countDocuments();

    // results.resultPokemons = model.slice(startIndex, endIndex);
    try {
      results.resultsData = await model
        .find()
        .limit(limit)
        .skip(startIndex)
        .exec();
      res.paginatedResults = results;
      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

// ROUTE
app.get("/pokemons", paginatedResults(PokemonModel), (req, res) => {
  debug("working...", res.paginatedResults);
  res.json(res.paginatedResults);
});

app.listen(PORT, () => debug(`Listening on port ${PORT}`));
