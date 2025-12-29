import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  getMovieByIdApi,
  deleteMovieApi
} from "../../../api/movieApi.js";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0); // ⭐ rating state

  /* ===============================
     FETCH MOVIE DETAILS
  =============================== */
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieByIdApi(id);
        setMovie(data);
      } catch (error) {
        alert("Movie not found");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  /* ===============================
     DELETE MOVIE
  =============================== */
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this movie?"
    );
    if (!confirmDelete) return;

    await deleteMovieApi(id);
    navigate("/movies");
  };

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (!movie) return <p style={{ textAlign: "center" }}>No movie data</p>;

  return (
    <div className="movie-details">
      {/* POSTER */}
      <img
        src={`http://localhost:1616${movie.poster}`}
        alt={movie.title}
        className="movie-poster"
      />

      {/* INFO */}
      <div className="movie-info">
        <h2>{movie.title}</h2>

        <p>
          <strong>Genre:</strong> {movie.genre}
        </p>

        <p>
          <strong>Release Year:</strong> {movie.releaseYear}
        </p>

        <p className="movie-description">
          {movie.description}
        </p>

        {/* ⭐ RATING */}
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "star active" : "star"}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="details-actions">
          <Link to={`/edit/${movie._id}`} className="btn edit">
            ✏️ Edit
          </Link>

          <button onClick={handleDelete} className="btn delete">
            🗑 Delete
          </button>

          <Link to="/movies" className="btn back">
            ← Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
