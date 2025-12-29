import { useEffect, useState } from "react";
import {
  getAllMoviesApi,
  deleteMovieApi
} from "../../../api/movieApi.js";
import "./MovieList.css";
import MovieCard from "../../components/MovieCard/MovieCard.jsx";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showFavOnly, setShowFavOnly] = useState(false);
  const [loading, setLoading] = useState(true);

  /* ===============================
     LOAD MOVIES
  =============================== */
  const loadMovies = async () => {
    setLoading(true);
    const data = await getAllMoviesApi();
    setMovies(data);
    setLoading(false);
  };

  /* ===============================
     LOAD FAVORITES FROM LOCALSTORAGE
  =============================== */
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  useEffect(() => {
    loadMovies();
  }, []);

  /* ===============================
     SEARCH + FAVORITE FILTER
  =============================== */
  useEffect(() => {
    let data = [...movies];

    // 🔍 search
    if (search.trim()) {
      data = data.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // ❤️ favorites
    if (showFavOnly) {
      data = data.filter((movie) =>
        favorites.includes(movie._id)
      );
    }

    setFiltered(data);
  }, [search, movies, favorites, showFavOnly]);

  /* ===============================
     FAVORITE TOGGLE
  =============================== */
  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((fid) => fid !== id)
        : [...prev, id];

      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  /* ===============================
     DELETE MOVIE
  =============================== */
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this movie?")) return;
    await deleteMovieApi(id);
    loadMovies();
  };

  /* ===============================
     CLEAR FILTERS
  =============================== */
  const clearFilters = () => {
    setSearch("");
    setShowFavOnly(false);
  };

  if (loading) return <p>Loading movies...</p>;

  return (
    <div className="movie-list">

      {/* 🔒 FIXED HEADER */}
      <div className="movie-header">
        <h2>🎬 Movie List</h2>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className={`fav-filter ${showFavOnly ? "active" : ""}`}
            onClick={() => setShowFavOnly(!showFavOnly)}
          >
            ❤️ Favorites
          </button>

          {(search || showFavOnly) && (
            <button className="clear-btn" onClick={clearFilters}>
              ❌ Clear
            </button>
          )}
        </div>
      </div>

      {/* ✅ ONLY MOVIE CARDS SCROLL */}
      <div className="movie-scroll">
        {filtered.length === 0 && <p>No movies found</p>}

        <div className="movie-grid">
          {filtered.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onDelete={handleDelete}
              isFav={favorites.includes(movie._id)}
              onFavToggle={toggleFavorite}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
