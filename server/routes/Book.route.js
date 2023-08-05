// Importing important packages
const express = require("express");

// Using express and routes
const app = express();
const BookRoute = express.Router();

// Book module which is required and imported
let BookModel = require("../models/Book");

BookRoute.get("/", async (req, res) => {
  try {
    const books = await BookModel.find();
    res.send(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

BookRoute.get("/:id", getBooks, (req, res) => {
  res.json(res.book);
});

BookRoute.post("/", async (req, res) => {
  const book = new BookModel({
    tile: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
  });
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

BookRoute.patch("/:id", getBooks, async (req, res) => {
  if (req.body.title != null) {
    res.book.title = req.body.title;
  }
  if (req.body.author != null) {
    res.book.author = req.body.author;
  }
  try {
    const updateBook = await res.book.save();
    res.json(updateBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

BookRoute.delete("/:id", getBooks, async (req, res) => {
  try {
    await res.book.deleteOne();
    res.json({ message: "Deleted Book." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getBooks(req, res, next) {
  let book;
  try {
    book = await BookModel.findById(req.params.id);
    if (book == null) {
      return res.status(404).json({ message: "Cannot find books" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.book = book;
  next();
}

module.exports = BookRoute;
