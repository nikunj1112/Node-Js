import Movie from "../models/MovieModel.js";
import fs from "fs";
import path from "path";

/* ===============================
   ADD MOVIE
=============================== */
export const addMovie = async (req, res) => {
  const { title, genre, releaseYear, description } = req.body;

  try {
    if (!req.file) {
      return res.status(400).json({ message: "Poster image is required" });
    }

    const result = await Movie.create({
      title,
      genre,
      releaseYear,
      description,
      poster: "/uploads/" + req.file.filename
    });

    res.status(201).json({
      message: "Movie added successfully!",
      result
    });
  } catch (error) {
    res.status(500).json({
      message: "Movie not added!",
      error: error.message
    });
  }
};

/* ===============================
   GET ALL MOVIES
=============================== */
export const getMovie = async (req, res) => {
  try {
    const data = await Movie.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Data not fetched!",
      error: error.message
    });
  }
};

/* ===============================
   GET MOVIE BY ID
=============================== */
export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({
      message: "Movie not fetched!",
      error: error.message
    });
  }
};

/* ===============================
   UPDATE MOVIE
=============================== */
export const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    // poster replace
    if (req.file) {
      const oldPosterPath = path.join(process.cwd(), movie.poster);
      if (fs.existsSync(oldPosterPath)) {
        fs.unlinkSync(oldPosterPath);
      }
      movie.poster = "/uploads/" + req.file.filename;
    }

    movie.title = req.body.title || movie.title;
    movie.genre = req.body.genre || movie.genre;
    movie.releaseYear = req.body.releaseYear || movie.releaseYear;
    movie.description = req.body.description || movie.description;

    await movie.save();

    res.status(200).json({
      message: "Movie updated successfully!",
      movie
    });
  } catch (error) {
    res.status(500).json({
      message: "Movie not updated!",
      error: error.message
    });
  }
};

/* ===============================
   DELETE MOVIE
=============================== */
export const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    // delete poster file
    const posterPath = path.join(process.cwd(), movie.poster);
    if (fs.existsSync(posterPath)) {
      fs.unlinkSync(posterPath);
    }

    await movie.deleteOne();

    res.status(200).json({
      message: "Movie deleted successfully!"
    });
  } catch (error) {
    res.status(500).json({
      message: "Movie not deleted!",
      error: error.message
    });
  }
};

/* ===============================
   SEARCH MOVIE BY TITLE
=============================== */
export const searchMovie = async (req, res) => {
  try {
    const { q } = req.query;

    const data = await Movie.find({
      title: { $regex: q, $options: "i" } 
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Search failed!",
      error: error.message
    });
  }
};
