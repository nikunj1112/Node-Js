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

## 📸 Demo/preview


<img width="500" height="400" alt="Screenshot 2025-12-10 at 3 06 04 PM" src="https://github.com/user-attachments/assets/a779d2e6-4c0e-4170-b26a-81df3ed4bc70" />
<img width="500" height="400" alt="Screenshot 2025-12-10 at 3 06 16 PM" src="https://github.com/user-attachments/assets/701de949-ff6d-403c-a870-3a7846414c64" />
<img width="500" height="400" alt="Screenshot 2025-12-10 at 3 06 54 PM" src="https://github.com/user-attachments/assets/7258f4ee-1190-4ca5-b975-78462b1ce191" />
<img width="500" height="400" alt="Screenshot 2025-12-10 at 3 07 14 PM" src="https://github.com/user-attachments/assets/ae47bbcb-6221-492e-8f8b-2bee28d4f604" />



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
