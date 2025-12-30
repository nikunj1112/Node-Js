import mongoose from "mongoose";
import { title } from "process";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    publishYear: { type: Number, required: true },
  },
  { timestamps: true }
);

export const bookModel = mongoose.model("books", bookSchema);