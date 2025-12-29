import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie, onDelete, isFav, onFavToggle }) => {
  return (
    <div className="movie-card">
      {/* ❤️ FAVORITE ICON */}
      <span
        className={`fav-icon ${isFav ? "active" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          onFavToggle(movie._id);
        }}
        title="Favorite"
      >
        ♥
      </span>

      {/* POSTER */}
      <img
        src={`http://localhost:1616${movie.poster}`}
        alt={movie.title}
      />

      {/* BODY */}
      <div className="movie-card-body">
        <h3>{movie.title}</h3>
        <p className="movie-genre">{movie.genre}</p>
        <p className="movie-year">{movie.releaseYear}</p>
      </div>

      {/* ACTIONS */}
      <div className="movie-actions">
        <Link to={`/movie/${movie._id}`} className="btn-view">
          View
        </Link>

        <Link to={`/edit/${movie._id}`} className="btn-edit">
          Edit
        </Link>

        <button
          className="btn-delete"
          onClick={() => onDelete(movie._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
