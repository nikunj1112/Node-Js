# 📌 Todos API (Node.js + Express)

This project is a simple **Todo Management API** built using **Node.js, Express** and file-based storage (`todo.json`).  
It supports complete CRUD operations, filtering, and validation.  
All endpoints can be tested using Postman.

---

## 🚀 Features

✔ Create a new todo  
✔ Get all todos  
✔ Get a single todo by ID  
✔ Update a todo  
✔ Delete a todo  
✔ Filter by status  
✔ Search by title  
✔ Filter by due date  
✔ Auto-increment ID  
✔ Stores data in `todo.json`

---

## 🛠 Tech Stack

- Node.js  
- Express.js  
- File-based JSON storage

---

## 📁 Project Structure

```
server.js  
todo.json  
README.md
```

---

## ▶️ Run the Project

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Start server
```bash
npm start
```

➡ Server runs on:
```
http://localhost:1011
```

---

## 📌 API Endpoints

---

### 👉 1. Create a new todo  
**POST** `/todo`  

Body (JSON):
```json
{
  "title": "Learn Express",
  "description": "Practice CRUD APIs",
  "status": "pending",
  "dueDate": "2025-01-20"
}
```

---

### 👉 2. Get all todos  
**GET** `/todo`

#### 🔍 Filtering options:

| Feature | URL Example |
|--------|--------------|
| Filter by status | `/todo?status=pending` |
| Search by title | `/todo?title=react` |
| Filter by due date | `/todo?dueDate=2025-01-20` |
| Combine filters | `/todo?status=pending&title=learn` |

---

### 👉 3. Get a todo by ID  
**GET** `/todo/:id`

Example:  
```
http://localhost:1011/todo/1
```

---

### 👉 4. Update a todo  
**PUT** `/todo/:id`  

Body Example:
```json
{
  "status": "done",
  "title": "Learn Express (updated)"
}
```

---

### 👉 5. Delete a todo  
**DELETE** `/todo/:id`

Example:
```
http://localhost:1011/todo/1
```

---

## 📌 Data Format (stored todo)

```json
{
  "id": 1,
  "title": "Buy groceries",
  "description": "Milk, bread, eggs",
  "status": "pending",
  "dueDate": "2025-01-10",
  "createdAt": "2025-01-05T07:30:20.000Z"
}
```

---

## 📽 Postman Testing Instructions

Your recording video must show:

✔ Starting server  
✔ Creating a todo  
✔ Getting todos  
✔ Filtering todos  
✔ Fetching by ID  
✔ Updating a todo  
✔ Deleting a todo  

---

## 📌 Submission Requirements  

📌 **Postman Testing Video URL:**  

https://drive.google.com/file/d/1Gpw6r8c4oZTvFabGjM9EMKpxGL--rx7l/view?usp=sharing


---

## ✨ Author  

Developed by **RANA NIKUNJ**
