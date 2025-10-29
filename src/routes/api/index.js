import express from 'express';
import booksRoutes from './booksRoutes.js';
import userRoutes from './userRoutes.js';

const router = express.Router();

router.use('/books', booksRoutes); // http://localhost:{PORT}/api/books
router.use('/user', userRoutes); // http://localhost:{PORT}/api/user

export default router;
