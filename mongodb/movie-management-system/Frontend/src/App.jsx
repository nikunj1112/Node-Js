import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

/* COMPONENTS */
import Navbar from "./components/Navbar/Navbar";

/* PAGES */
import FirstPage from "./pages/FirstPage/FirstPage";
import MovieList from "./pages/MovieList/MovieList";
import AddMovie from "./pages/AddMovie/AddMovie";
import EditMovie from "./pages/EditMovie/EditMovie";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

/* 🔹 Layout component */
const Layout = () => {
  const location = useLocation();

  return (
    <>
      {/* Navbar sirf "/" par hide */}
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        {/* FIRST PAGE */}
        <Route path="/" element={<FirstPage />} />

        {/* MOVIES */}
        <Route path="/movies" element={<MovieList />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/edit/:id" element={<EditMovie />} />
        <Route path="/movie/:id" element={<MovieDetails />} />

        {/* FALLBACK */}
        <Route
          path="*"
          element={
            <h2 style={{ textAlign: "center", marginTop: "50px" }}>
              404 | Page Not Found
            </h2>
          }
        />
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
