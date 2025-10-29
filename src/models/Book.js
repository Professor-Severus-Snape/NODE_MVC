import { v4 as uuid } from 'uuid';

export default class Book {
  constructor({
    title = 'нет данных',
    description = 'нет данных',
    authors = 'нет данных',
    favorite = 'нет данных',
    fileCover = 'нет данных',
    fileName = 'нет данных',
    fileBook = 'нет данных', // имя! загруженного файла книги
  } = {}) {
    this.id = uuid();
    this.title = title;
    this.description = description;
    this.authors = authors;
    this.favorite = favorite;
    this.fileCover = fileCover;
    this.fileName = fileName;
    this.fileBook = fileBook;
  }

  // приватное хранилище книг - сразу добавляем mock-данные:
  static #books = Array.from(
    { length: 5 },
    (_, i) =>
      new Book({
        title: `title-${i + 1}`,
        description: `description-${i + 1}`,
        authors: `authors-${i + 1}`,
        favorite: `favorite-${i + 1}`,
        fileCover: `fileCover-${i + 1}`,
        fileName: `fileName-${i + 1}`,
        fileBook: `fileBook-${i + 1}.pdf`,
      }),
  );

  static getAllBooks() {
    return [...this.#books]; // возвращаем копию! массива (в целях безопасности)
  }

  static getBookById(id) {
    return this.#books.find((book) => book.id === id);
  }

  static addBook(book) {
    this.#books.push(book);
  }

  static removeBookById(id) {
    const idx = this.#books.findIndex((book) => book.id === id);

    if (idx !== -1) {
      this.#books.splice(idx, 1);
      return true;
    }

    return false;
  }

  static updateBook(id, newData) {
    const bookToUpdate = this.getBookById(id);
    if (!bookToUpdate) return null;

    const bookProperties = [
      'title',
      'description',
      'authors',
      'favorite',
      'fileCover',
      'fileName',
      'fileBook',
    ];

    // обновляем только существующие поля:
    bookProperties.forEach((property) => {
      if (property in newData) {
        bookToUpdate[property] = newData[property];
      }
    });

    return bookToUpdate;
  }
}
