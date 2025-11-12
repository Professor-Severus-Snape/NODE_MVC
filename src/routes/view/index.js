import express from 'express';
import booksRoutes from './booksRoutes.js';

const router = express.Router();

// GET -> корневой роут -> "заглушка" в виде редиректа на библиотеку (вдруг появится роут '/users'):
router.get('/', (_req, res) => res.redirect('/books'));

router.use('/books', booksRoutes); // http://localhost:{PORT}/books

export default router;
