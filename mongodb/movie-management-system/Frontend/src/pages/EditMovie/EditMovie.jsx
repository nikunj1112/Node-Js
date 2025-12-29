import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getMovieByIdApi,
  updateMovieApi
} from "../../../api/movieApi.js";
import "./EditMovie.css";

const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    genre: "",
    releaseYear: "",
    description: ""
  });

  const [poster, setPoster] = useState(null);   // ✅ poster state
  const [fileName, setFileName] = useState(""); // ✅ file name
  const [loading, setLoading] = useState(true);

  /* ===============================
     FETCH MOVIE DATA
  =============================== */
  useEffect(() => {
    getMovieByIdApi(id)
      .then((data) => {
        setForm({
          title: data.title,
          genre: data.genre,
          releaseYear: data.releaseYear,
          description: data.description
        });
        setLoading(false);
      })
      .catch(() => {
        alert("Movie not found");
        navigate("/movies");
      });
  }, [id, navigate]);

  /* ===============================
     INPUT CHANGE
  =============================== */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ===============================
     FILE CHANGE
  =============================== */
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPoster(file);
      setFileName(file.name); // ✅ show name
    }
  };

  /* ===============================
     UPDATE MOVIE
  =============================== */
  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) =>
      formData.append(key, form[key])
    );

    if (poster) {
      formData.append("poster", poster);
    }

    try {
      await updateMovieApi(id, formData);
      navigate("/movies");
    } catch (error) {
      alert("Movie not updated!");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="form-container">
      <h2>✏ Edit Movie</h2>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="genre"
          value={form.genre}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="releaseYear"
          value={form.releaseYear}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />

        {/* FILE UPLOAD */}
        <label className="browse-btn1">
          Browse File
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />
        </label>

        {/* FILE NAME SHOW */}
        {fileName && (
          <p className="file-name">
          <strong className="file-names">Selected: </strong> <span>{fileName}</span>
          </p>
        )}

        <button type="submit">
          Update Movie
        </button>
      </form>
    </div>
  );
};

export default EditMovie;
