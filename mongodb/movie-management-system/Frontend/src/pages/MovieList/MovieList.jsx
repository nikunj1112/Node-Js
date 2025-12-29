import { useEffect, useState } from "react";
import {
  getAllMoviesApi,
  deleteMovieApi
} from "../../../api/movieApi.js";
import "./MovieList.css";
import MovieCard from "../../components/MovieCard/MovieCard.jsx";

const MovieList = () => {
  const [movies, setMovies] = useState([]);          // original
  const [filtered, setFiltered] = useState([]);     // filtered
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Pagination
  const [page, setPage] = useState(1);
  const limit = 6;

  /* ===============================
     LOAD ALL MOVIES
  =============================== */
  const loadMovies = async () => {
    setLoading(true);
    const data = await getAllMoviesApi();
    setMovies(data);
    setFiltered(data);
    setPage(1);
    setLoading(false);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  /* ===============================
     LIVE SEARCH FILTER
  =============================== */
  useEffect(() => {
    if (!search.trim()) {
      setFiltered(movies);
    } else {
      const result = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(result);
    }
    setPage(1);
  }, [search, movies]);

  /* ===============================
     DELETE MOVIE
  =============================== */
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this movie?")) return;
    await deleteMovieApi(id);
    loadMovies();
  };

  /* ===============================
     CLEAR SEARCH
  =============================== */
  const clearSearch = () => {
    setSearch("");
    setFiltered(movies);
    setPage(1);
  };

  /* ===============================
     PAGINATION LOGIC
  =============================== */
  const totalPages = Math.ceil(filtered.length / limit);
  const paginatedMovies = filtered.slice(
    (page - 1) * limit,
    page * limit
  );

  if (loading) return <p>Loading movies...</p>;

  return (
    <div className="movie-list">
      <h2>🎬 Movie List</h2>

      {/* SEARCH */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button className="clear-btn" onClick={clearSearch}>
            Clear ✖
          </button>
        )}
      </div>

      {/* EMPTY STATE */}
      {filtered.length === 0 && <p>No movies found</p>}

      {/* MOVIE GRID */}
      <div className="movie-grid">
        {paginatedMovies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="pagination">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={page === i + 1 ? "active" : ""}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
