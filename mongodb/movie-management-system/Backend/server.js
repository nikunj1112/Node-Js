import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { connectDB } from './config/db.js';
import router from './routes/MovieRoutes.js';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 1616;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const uploadPath = path.join(__dirname, "uploads");

connectDB();
app.use("/", router);
app.use("/uploads",express.static(uploadPath))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));