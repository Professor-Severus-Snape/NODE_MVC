import express from 'express';
import error404 from '../../middleware/view/error404.js'; // middleware 404 для view
import booksRoutes from './booksRoutes.js';

const router = express.Router();

// GET -> корневой роут -> "заглушка" в виде редиректа на библиотеку (вдруг появится роут '/users'):
router.get('/', (_req, res) => res.redirect('/books'));

// сначала подключаем подроуты:
router.use('/books', booksRoutes); // http://localhost:{PORT}/books

// затем - обработка 404 (не сработал ни один маршрут -> http://localhost:{PORT}/unknown):
router.use(error404);

export default router;
