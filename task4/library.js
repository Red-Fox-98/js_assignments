class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        if (this.books.some((paper) => paper.isbn === book.isbn)) {
            throw new Error("There's a book under that isbn");
        }
        this.books.push(book);
    }

    borrowBook(isbn) {
        const book = this.books.find((book) => book.isbn === isbn);
        if (book) {
            book.isAvailable = false;
        }
    }

    returnBook(isbn) {
        const book = this.books.find((book) => book.isbn === isbn);
        if (book) {
            book.isAvailable = true;
        }
    }

    listAvailableBooks() {
        return this.books.filter((book) => book.isAvailable);
    }
}

module.exports.Book = Book;
module.exports.Library = Library;
