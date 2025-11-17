import express from 'express';
import * as bookController from '../../controllers/bookController/index.js';

const router = express.Router();

// GET -> форма создания книги:
router.get('/create', bookController.view.renderCreateBook);

// GET -> форма редактирования книги:
router.get('/:id/update', bookController.view.renderUpdateBook);

// POST -> обновление книги:
router.post('/:id/update', bookController.actions.updateBook);

// GET -> скачивание книги (перед! динамическим id):
router.get('/:id/download', bookController.actions.downloadBook);

// POST (DELETE нельзя отправить через форму в HTML) -> удаление книги:
router.post('/:id/delete', bookController.actions.deleteBook);

// GET -> просмотр одной книги:
router.get('/:id', bookController.view.renderBookById);

// GET -> список всех книг:
router.get('/', bookController.view.renderAllBooks);

export default router;
