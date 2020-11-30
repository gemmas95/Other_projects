const mongoose = require("mongoose");

const { Schema } = mongoose;

const PokemonModel = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  typeList: { type: [String], required: true },
});

module.exports = mongoose.model("Pokemon", PokemonModel);
