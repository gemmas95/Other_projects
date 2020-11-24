const mongoose = require("mongoose");
const { Schema } = mongoose;

const authorSchema = new Schema({
  name: String,
  age: Number,
});

// The collections name it's going to be Author, this collection will have inside a authorSchema
module.exports = mongoose.model("Author", authorSchema);
