import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMovieApi } from "../../../api/movieApi.js";
import "./AddMovie.css";

const AddMovie = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    genre: "",
    releaseYear: "",
    description: ""
  });

  const [poster, setPoster] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const setImage = (file) => {
    if (!file) return;
    setPoster(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setImage(e.dataTransfer.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!poster) {
      alert("Please upload movie poster");
      return;
    }

    const formData = new FormData();
    Object.keys(form).forEach((k) => formData.append(k, form[k]));
    formData.append("poster", poster);

    try {
      setLoading(true);
      await addMovieApi(formData);
      navigate("/movies");
    } catch {
      alert("Movie not added!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>➕Add Movie</h2>

      <form onSubmit={submitHandler}>
        <input name="title" placeholder="Movie Title" onChange={handleChange} required />
        <input name="genre" placeholder="Genre" onChange={handleChange} required />
        <input type="number" name="releaseYear" placeholder="Release Year" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />

        {/* UPLOAD BOX */}
        <div
          className="drop-zone"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          {preview ? (
            <>
              <img src={preview} alt="preview" />
              <span
                className="remove"
                onClick={() => {
                  setPoster(null);
                  setPreview(null);
                }}
              >
                ❌
              </span>
            </>
          ) : (
            <>
              <p>Drag & Drop Poster here</p>
              <span className="or">OR</span>
              <label className="browse-btn">
                Browse File
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
            </>
          )}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Movie"}
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
