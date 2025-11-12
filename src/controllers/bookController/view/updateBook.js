import Book from '../../../models/Book.js';

export const renderUpdateBook = (req, res) => {
  const { id } = req.params;
  const book = Book.getBookById(id);

  res.render('books/update', {
    title: `Редактировать книгу: ${book.title}`,
    book,
  });
};
