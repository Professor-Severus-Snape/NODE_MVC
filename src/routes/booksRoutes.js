import express from 'express';
import multerUploadBook from '../middleware/multerUploadBook.js'; // middleware (multer - загрузка)
import * as bookController from '../controllers/bookController/index.js'; // конечные обработчики

const router = express.Router();

// Middlewares уровня маршрутизации:

// самый специфичный путь — должен стоять первым, чтобы '/:id' его не перекрыл:
router.get('/:id/download', bookController.downloadBookById); // скачивание книги

// путь ко всей коллекции — не конфликтует с другими - может стоять где угодно:
router
  .route('/')
  .get(bookController.getAllBooks) // получение всего списка книг
  .post(multerUploadBook.single('fileBook'), bookController.addNewBook); // создание новой книги

// общий путь к одному элементу — идёт последним:
router
  .route('/:id')
  .get(bookController.getBookById) // получение книги по её id
  .put(multerUploadBook.single('fileBook'), bookController.updateBookById) // изменение данных книги
  .delete(bookController.deleteBookById); // удаление книги по её id

export default router;
