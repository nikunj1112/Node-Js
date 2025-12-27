import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const API_URL = "http://localhost:1515";

const avatars = [
  "https://i.pravatar.cc/40?img=1",
  "https://i.pravatar.cc/40?img=2",
  "https://i.pravatar.cc/40?img=3",
  "https://i.pravatar.cc/40?img=4",
  "https://i.pravatar.cc/40?img=5",
];

export default function App() {
  const [tweets, setTweets] = useState([]);
  const [username, setUsername] = useState("");
  const [tweet, setTweet] = useState("");
  const [editId, setEditId] = useState(null);
  const [editTweet, setEditTweet] = useState("");
  const [dark, setDark] = useState(false);

  const timeAgo = (time) => {
    const diff = Math.floor((Date.now() - time) / 1000);
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

  const fetchTweets = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    const withMeta = data.map((t) => ({
      ...t,
      avatar: avatars[Math.floor(Math.random() * avatars.length)],
    }));
    setTweets(withMeta.reverse());
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  const addTweet = async () => {
    if (!username || !tweet) return alert("Fill all fields");
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: Date.now(),
        username,
        tweet,
        createdAt: Date.now(),
        likes: 0,
        retweets: 0,
      }),
    });
    setUsername("");
    setTweet("");
    fetchTweets();
  };

  const deleteTweet = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchTweets();
  };

  const startEdit = (t) => {
    setEditId(t.id);
    setEditTweet(t.tweet);
  };

  const updateTweet = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tweet: editTweet }),
    });
    setEditId(null);
    setEditTweet("");
    fetchTweets();
  };

  const updateReaction = async (id, type) => {
    const t = tweets.find((x) => x.id === id);
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [type]: t[type] + 1 }),
    });
    fetchTweets();
  };

  return (
    <div className={`layout ${dark ? "dark" : ""}`}>
      {/* LEFT */}
      <aside className="left">
        <h2 className="logo">🐦 Twitter</h2>
        <ul className="menu">
          <li className="active">🏠 Home</li>
          <li># Explore</li>
          <li>🔔 Notifications</li>
          <li>✉️ Messages</li>
          <li>👤 Profile</li>
          <li>… More</li>
        </ul>
        <button className="theme-btn" onClick={() => setDark(!dark)}>
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </aside>

      {/* CENTER */}
      <main className="center">
        <div className="header"> <span className="name">Twitter/ </span>Home</div>

        <div className="tweet-box">
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <textarea
            placeholder="What's happening?"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          />
          <button onClick={addTweet}>Tweet</button>
        </div>

        {/* 🔥 ONLY THIS PART SCROLLS */}
        <div className="tweets-scroll">
          {tweets.map((t) => (
            <motion.div
              key={t.id}
              className="tweet"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img src={t.avatar} alt="avatar" />
              <div className="tweet-body">
                <div className="tweet-header">
                  <b>@{t.username}</b>
                  <span>{timeAgo(t.createdAt)}</span>
                </div>

                {editId === t.id ? (
                  <>
                    <textarea className="edit-textarea"
                      value={editTweet}
                      onChange={(e) => setEditTweet(e.target.value)}
                    />
                    <div className="edit-actions">
                      <button className="save-btn" onClick={() => updateTweet(t.id)}>💾</button>
                      <button className="exit-btn" onClick={() => setEditId(null)}>❌</button>
                    </div>

                  </>
                ) : (
                  <>
                    <p>{t.tweet}</p>
                    <div className="actions">
                      <button onClick={() => updateReaction(t.id, "likes")}>
                        ❤️ {t.likes}
                      </button>
                      <button onClick={() => updateReaction(t.id, "retweets")}>
                        🔁 {t.retweets}
                      </button>
                      <button onClick={() => startEdit(t)}>✏️</button>
                      <button onClick={() => deleteTweet(t.id)}>🗑️</button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* RIGHT */}
      <aside className="right">
        <input className="search" placeholder="Search Twitter" />

        <div className="card">
          <h3>Trends for you</h3>
          <p>#DisneyPlus</p>
          <p>#MondayMotivation</p>
          <p>#AMOCconf19</p>
          <p>#Unifor19</p>
        </div>

        <div className="card">
          <h3>Trends</h3>
          <p>#ReactJS</p>
          <p>#NodeJS</p>
          <p>#JavaScript</p>
        </div>
      </aside>

      {/* MOBILE NAV */}
      <div className="mobile-nav">
        <span>🏠</span>
        <span>🔍</span>
        <span>➕</span>
        <span>🔔</span>
        <span>👤</span>
      </div>
    </div>
  );
}
