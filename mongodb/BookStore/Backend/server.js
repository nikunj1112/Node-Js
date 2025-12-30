import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";
import logger from "./middlewares/logger.js";

const PORT = 2020;

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger); 

connectDB(); 

app.use("/api/books", bookRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));