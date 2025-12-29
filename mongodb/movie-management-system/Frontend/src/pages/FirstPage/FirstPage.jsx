import React from "react";
import { useNavigate } from "react-router-dom";
import "./FirstPage.css";

const FirstPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/movies");
  };

  return (
    <>
      <div className="firstpage">
        {/* HERO SECTION */}
        <section className="hero">
          <h1>Movie Management System</h1>
          <p>
            A complete solution to manage movies, shows, bookings and users
            efficiently in one platform.
          </p>
          <button className="btn" onClick={handleStart}>
            Get Started 🚀
          </button>
        </section>

        {/* FEATURES */}
        <section className="features">
          <div className="card">
            <h3>🎬 Movie Control</h3>
            <p>Add, update and delete movies with ease.</p>
          </div>
          <div className="card">
            <h3>⏰ Show Timings</h3>
            <p>Manage show schedules and screen timings.</p>
          </div>
          <div className="card">
            <h3>🎟 Ticket Booking</h3>
            <p>Track bookings and seat availability.</p>
          </div>
          <div className="card">
            <h3>📊 Reports</h3>
            <p>View daily & monthly performance reports.</p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <p>© 2025 Movie Management System | Developed by Nikunj Rana</p>
        </footer>
      </div>
    </>
  );
};

export default FirstPage;
