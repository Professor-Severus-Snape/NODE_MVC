import express from 'express';
import * as bookController from '../../controllers/bookController/index.js';

const router = express.Router();

// GET -> форма создания книги:
router.get('/create', bookController.view.renderCreateBook);

// GET -> форма редактирования книги:
router.get('/update/:id', bookController.view.renderUpdateBook);

// GET -> скачивание книги (перед! динамическим id):
router.get('/:id/download', bookController.actions.downloadBook);

// GET -> просмотр одной книги:
router.get('/:id', bookController.view.renderBookById);

// GET -> список всех книг:
router.get('/', bookController.view.renderAllBooks);

// POST (DELETE нельзя отправить через форму в HTML) -> удаление книги:
router.post('/delete/:id', bookController.actions.deleteBook);

export default router;
