# 📚 BookStore Backend (Node.js + Express + MongoDB)

A **RESTful backend API** for a Book Store application built using **Node.js**, **Express.js**, and **MongoDB (Mongoose)**.
This project follows a **clean MVC folder structure** with controllers, routes, models, and middleware.

---

## 🚀 Features

* 📘 **Book Management (CRUD)**

  * Create a new book
  * Get all books
  * Get book by ID
  * Update book details
  * Delete a book
* 🧱 **MVC Architecture**
* 🗂 **Modular Folder Structure**
* 🛡 Custom Middleware (Logger)
* 🗄 MongoDB Database using Mongoose
* ⚙️ Environment-based Configuration Support

---

## 📁 Folder Structure

```
BookStore/Backend
│
├── config/                # Database & app configuration
│
├── controllers/           # Business logic
│   └── bookControllers.js
│
├── middlewares/           # Custom middlewares
│   └── logger.js
│
├── models/                # Mongoose schemas & models
│   └── bookModel.js
│
├── routes/                # API routes
│   └── bookRoutes.js
│
├── node_modules/
│
├── package.json
├── package-lock.json
└── server.js              # Entry point of the application
```

---

## 📦 Book Schema

Each book contains the following fields:

* **title** (String, required)
* **author** (String, required)
* **price** (Number, required)
* **category** (String, required)
* **publishYear** (Number, required)

---

## 🔗 API Endpoints

### 📘 Books API

| Method | Endpoint         | Description    |
| ------ | ---------------- | -------------- |
| GET    | `/api/books`     | Get all books  |
| GET    | `/api/books/:id` | Get book by ID |
| POST   | `/api/books`     | Add new book   |
| PUT    | `/api/books/:id` | Update book    |
| DELETE | `/api/books/:id` | Delete book    |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
```

### 2️⃣ Navigate to Backend Folder

```bash
cd BookStore/Backend
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start the Server

```bash
npm start
```

OR (with nodemon)

```bash
npm run dev
```

---

## 🛠 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JavaScript (ES6+)**

---

## 📌 Future Enhancements

* 🔐 User Authentication (JWT)
* 🛒 Cart & Order Management
* 🔍 Search & Filter Books
* 🌐 Frontend Integration (React)

---

## 👨‍💻 Author

**Nikunj Rana**
Aspiring Full-Stack Developer (MERN Stack)

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and feel free to contribute!
