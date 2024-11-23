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

const book1 = new Book('Биология', 'Горелова Марина Петровна', 2770922769);
const book2 = new Book('Математика', 'Смирнова Анна Макаровна', 7843672087);
const book3 = new Book('Физика', 'Егорова Милана Ярославовна', 2088528350);

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
console.log(library.listAvailableBooks());
library.borrowBook(7843672087);
console.log(library.listAvailableBooks());
library.returnBook(7843672087);
console.log(library.listAvailableBooks());
