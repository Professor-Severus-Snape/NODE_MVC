import express from 'express';
import booksRoutes from './booksRoutes.js';

const router = express.Router();

router.use('/books', booksRoutes); // http://localhost:{PORT}/actions/books

export default router;
