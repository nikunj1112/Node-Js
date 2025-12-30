import express from 'express'
import {addBook,readBooks} from '../controllers/bookControllers.js'

const router = express.Router();

router.post("/", addBook);
router.get("/", readBooks);

export default router;