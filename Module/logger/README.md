# 📌 HTTP Server with Request Logging (Node.js)

This project is a simple **Node.js HTTP server** that handles multiple routes and request methods — GET, POST, PUT, DELETE — and logs every client request into a file.

---

## 🚀 Features

✔ Handles routes:  
- `/` (Home)  
- `/about`  
- `/service`  
- `/portfolio`

✔ Supports HTTP methods:  
- GET  
- POST  
- PUT  
- DELETE

✔ Logs every request in a file (`one.txt`) including:  
- URL  
- Method  
- Date & Time  
- Client IP address

✔ Sends plain text responses based on URL & method.

---

## 📂 Project Structure

```
project/
 ├── index.js   // Server code
 └── one.txt    // Auto-generated log file
```

---

## 🛠️ How It Works

1. Creates an HTTP server using Node's built-in `http` module.  
2. Appends log details into `one.txt` for each request.  
3. Validates `req.url` and `req.method` to respond accordingly.  
4. Logs `404 – page not found` for unmatched routes.

---

## 📦 Installation & Run

### 1️⃣ Install Node.js  
Check installation:
```
node -v
```

### 2️⃣ Run the Server
```
node index.js
```

✔ Output:
```
server started
```

📍 Visit server at:

➡ http://localhost:1011/

---

## 🔍 Log File Example

`one.txt` example entry:

```
client request on http://localhost:1011/about by GET at 10/12/2025 | 14:30:12 from IP: ::1
```

---

## 📌 Usage Testing

You can test via browser or Postman/Thunder Client:

✔ GET `http://localhost:1011/`  
✔ POST `http://localhost:1011/about`  
✔ DELETE `http://localhost:1011/service`

---

## ✨ Future Enhancements

- Add JSON response support  
- Convert server to Express.js  
- Add middleware for cleaner logging  
- Proper 404 web response instead of console output

---

## 👨‍💻 Author

A learning project demonstrating HTTP request handling & logging in Node.js.
