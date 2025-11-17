import express from 'express';
import error404 from '../../middleware/actions/error404.js'; // middleware 404 для actions
import booksRoutes from './booksRoutes.js';

const router = express.Router();

// сначала подключаем подроуты:
router.use('/books', booksRoutes); // http://localhost:{PORT}/actions/books

// затем - обработка 404 (не сработал ни один маршрут -> http://localhost:{PORT}/actions/unknown):
router.use(error404);

export default router;
