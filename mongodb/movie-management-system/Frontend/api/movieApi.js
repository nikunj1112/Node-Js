const BASE_URL = "http://localhost:1616/api/movies";

/* ===============================
   ADD MOVIE
=============================== */
export const addMovieApi = async (formData) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    body: formData
  });
  return res.json();
};

/* ===============================
   GET ALL MOVIES
=============================== */
export const getAllMoviesApi = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

/* ===============================
   GET MOVIE BY ID
=============================== */
export const getMovieByIdApi = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};

/* ===============================
   UPDATE MOVIE
=============================== */
export const updateMovieApi = async (id, formData) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    body: formData
  });
  return res.json();
};

/* ===============================
   DELETE MOVIE
=============================== */
export const deleteMovieApi = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });
  return res.json();
};

/* ===============================
   SEARCH MOVIE
=============================== */
export const searchMovieApi = async (query) => {
  const res = await fetch(`${BASE_URL}/search?q=${query}`);
  return res.json();
};
