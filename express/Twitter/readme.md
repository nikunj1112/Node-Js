# 🐦 Twitter Clone (React + Node.js)

A **Twitter-like full-stack web application** built using **React (Frontend)** and **Node.js + Express (Backend)**.  
This project supports **CRUD operations**, **likes**, **retweets**, **edit tweets**, **dark mode**, and is **fully responsive**.

---

# 🚀 Features

 ### 🔹 Frontend (React)
- 🏠 Twitter-style **3-column layout**
  - Left Sidebar (static)
  - Center Feed (CRUD)
  - Right Sidebar (static)
- ✏️ **Edit Tweet** (PUT request)
- 🗑️ **Delete Tweet**
- ❤️ **Like** & 🔁 **Retweet counters**
- 🧑‍💻 **Random Avatars**
- ⏱ **Time Ago** system (seconds, minutes, hours, days)
- 🌙 **Dark Mode Toggle**
- 📱 **Fully Responsive**
  - Mobile bottom navigation
  - Sidebars hidden on small screens
- ✨ **Smooth Animations** using `framer-motion`


### 🔹 Backend (Node.js + Express)
- REST API with:
  - `GET /` → Fetch all tweets
  - `POST /` → Add new tweet
  - `PUT /:id` → Update tweet (edit / like / retweet)
  - `DELETE /:id` → Delete tweet
- Data stored in **JSON file (`db.json`)**
- CORS enabled
- Auto file creation if `db.json` does not exist

---

## 🎥 Demo Video


https://drive.google.com/file/d/1IjP-1sL7P77OjbxYjsvjlSR9paI4gD8x/view?usp=sharing


## 🖼 Screenshots

<img width="700" height="500" alt="Screenshot 2025-12-27 at 7 39 25 PM" src="https://github.com/user-attachments/assets/74f3c5e6-6eb6-4a17-b55a-6e8bf80efd55" />


---

## 🧩 Tech Stack

### Frontend
- React
- Framer Motion
- CSS (Custom, Twitter-like UI)

### Backend
- Node.js
- Express.js
- File System (fs)
- JSON-based storage

---

## 📁 Folder Structure

project-root/
│
├── frontend/
│   └── src/
│       ├── App.js
│       ├── App.css
│       └── main.jsx
│
├── backend/
│   ├── server.js
│   └── db.json
│
└── README.md

---

### 🛠️ Installation & Setup

## 1️⃣ Backend Setup
cd backend
npm install
node server.js

#### Server will run on:
http://localhost:1515

## 2️⃣ Frontend Setup
cd frontend
npm install
npm run dev


---

### 🔗 API Endpoints

 | Method | Endpoint | Description                 |
| ------ | -------- | --------------------------- |
| GET    | `/`      | Fetch all tweets            |
| POST   | `/`      | Add new tweet               |
| PUT    | `/:id`   | Edit tweet / Like / Retweet |
| DELETE | `/:id`   | Delete tweet                |


---

### 🧪 Sample Tweet Data (db.json)

{
  "id": 1766844572283,
  "username": "Nikunj.web",
  "tweet": "building projects > watching tutorials 🔥",
  "createdAt": 1766844572283,
  "likes": 3,
  "retweets": 3
}

---

### 📱 Responsive Design

-> Desktop: Full 3-column layout

->Mobile:
     * Center feed only
     * Bottom navigation bar
     * Optimized scrolling

---

### 🌙 Dark Mode

* Toggle dark/light theme from sidebar
* Clean UI for both modes

---

### 🎯 Learning Outcomes

* Full-stack CRUD application
* REST API design
* File-based database logic
* React state management
* Responsive UI & UX
* Component-based architecture

---

### 🔮 Future Improvements

* User authentication (Login / Signup)
* Image upload in tweets
* MongoDB database
* Comment system
* Deployment (Vercel + Render)

---

### 👨‍💻 Author

~ Nikunj Rana
  Aspiring Full-Stack Developer
  Learning MERN Stack 🚀.

---

