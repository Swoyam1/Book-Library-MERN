const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// List of columns for Employee schema
let Book = new Schema(
  {
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    genre: {
      type: String,
    },
  },
  {
    collection: "books",
  }
);

module.exports = mongoose.model("Book", Book);
