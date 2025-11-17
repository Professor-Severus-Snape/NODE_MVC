import express from 'express';
import error404 from '../../middleware/api/error404.js'; // middleware 404 для api
import booksRoutes from './booksRoutes.js';
import userRoutes from './userRoutes.js';

const router = express.Router();

// сначала подключаем подроуты:
router.use('/books', booksRoutes); // http://localhost:{PORT}/api/books
router.use('/user', userRoutes); // http://localhost:{PORT}/api/user

// затем - обработка 404 (не сработал ни один маршрут -> http://localhost:{PORT}/api):
router.use(error404);

export default router;
