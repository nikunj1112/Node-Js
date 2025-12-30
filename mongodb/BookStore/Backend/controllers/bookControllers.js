import { bookModel } from "../models/bookModel.js";

export const addBook = async (req, res) => {
  try {
    const result = await bookModel.create(req.body);
    res.json({ message: "Book added successfully", result });
  } catch (err) {
    res.json({ message: "Error in adding book", err: err.message });
  }
};

export const readBooks = async (req, res) => {
  try {
    const data = await bookModel.find();
    res.json(data);
  } catch (err) {
    res.json({ message: "Error in fetching books", err: err.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const result = await bookModel.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json({ message: "Book updated successfully", result });
  } catch (err) {
    res.json({ message: "Error in updating book", err: err.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const result = await bookModel.deleteOne({ _id: req.params.id });
    res.json({ message: "Book deleted successfully", result });
  } catch (err) {
    res.json({ message: "Error in deleting book", err: err.message });
  }
};