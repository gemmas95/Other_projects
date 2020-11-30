const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  authorId: { type: Schema.Types.ObjectId, required: true },
});

// The collections name it's going to be Book, this collection will have inside a bookSchema
module.exports = mongoose.model("Book", bookSchema);
