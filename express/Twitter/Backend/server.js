import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filepath = path.join(__dirname, "db.json");

// ---------- Helper functions ----------

const readuser = () => {
  // file exist na ho to empty array bana do
  if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, "[]");
  }
  const data = fs.readFileSync(filepath, "utf-8");
  return JSON.parse(data || "[]");
};

const writeuser = (user) => {
  fs.writeFileSync(filepath, JSON.stringify(user, null, 2));
};

// ---------- Routes ----------

// GET all users
app.get("/", (req, res) => {
  const user = readuser();
  res.json(user);
});

// POST new user
app.post("/", (req, res) => {
  const user = readuser();
  user.push(req.body);
  writeuser(user);
  res.json({ msg: "data inserted successfully!" });
});

// PUT update user by id
app.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;

  let user = readuser();

  user = user.map((u) =>
    u.id === id ? { ...u, ...body, id } : u
  );

  writeuser(user);
  res.json({ msg: "data updated successfully!" });
});

// DELETE user by id
app.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  let user = readuser();

  user = user.filter((u) => u.id !== id);
  writeuser(user);

  res.json({ msg: "data deleted successfully!" });
});

// ---------- Server ----------
app.listen(1515, () => {
  console.log("server started on port 1515");
});
