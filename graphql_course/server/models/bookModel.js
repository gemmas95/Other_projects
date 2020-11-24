const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: Schema.Types.ObjectId,
});

// The collections name it's going to be Book, this collection will have inside a bookSchema
module.exports = mongoose.model("Book", bookSchema);
