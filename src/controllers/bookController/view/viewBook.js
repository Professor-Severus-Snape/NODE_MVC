import Book from '../../../models/Book.js';

export const renderBookById = (req, res) => {
  const { id } = req.params;
  const book = Book.getBookById(id);

  res.render('books/view', {
    title: `Книга: ${book.title}`,
    book,
  });
};
