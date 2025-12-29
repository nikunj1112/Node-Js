import express from "express";
import multer from "multer";
import path from "path";

import {
  addMovie,
  getMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
  searchMovie
} from "../controllers/MovieController.js";

import { uploadPath } from "../server.js"; // ✅ same import rakha

const router = express.Router();

/* ===============================
   MULTER STORAGE CONFIG
=============================== */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath); // ✅ same as your code
  },
  filename: (req, file, cb) => {
    cb(
      null,
      "movie-img-" + Date.now() + path.extname(file.originalname)
    );
  }
});

const upload = multer({ storage });

/* ===============================
   ROUTES (FIXED)
=============================== */

// ✅ ADD
router.post("/api/movies", upload.single("poster"), addMovie);

// ✅ SEARCH (HAMESHA :id SE UPAR)
router.get("/api/movies/search", searchMovie);

// ✅ GET ALL
router.get("/api/movies", getMovie);

// ✅ GET BY ID (HAMESHA BAAD ME)
router.get("/api/movies/:id", getMovieById);

// ✅ UPDATE
router.put("/api/movies/:id", upload.single("poster"), updateMovie);

// ✅ DELETE
router.delete("/api/movies/:id", deleteMovie);


export default router;
