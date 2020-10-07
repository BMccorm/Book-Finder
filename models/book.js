const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;


// var imageSchema = new mongoose.Schema({
//   name: String,
//   desc: String,
//   img:
//   {
//     data: Buffer,
//     contentType: String
//   }
// });

// //Image is a model which has a schema imageSchema 

// module.exports = new mongoose.model('Image', imageSchema); 