const Library = require('./library').Library;
const Book = require('./library').Book;

const book1 = new Book('Биология', 'Горелова Марина Петровна', 2770922769);
const book2 = new Book('Математика', 'Смирнова Анна Макаровна', 7843672087);
const lib = new Library();

test("addBook", () => {
    expect(lib.books.length).toBe(0);

    lib.addBook(book1);
    expect(lib.books.length).toBe(1);
    expect(lib.books[0]).toBe(book1);

    lib.addBook(book2);
    expect(lib.books.length).toBe(2);
    expect(lib.books[1]).toBe(book2);

    expect(() => {
        lib.addBook(book2);
    }).toThrow();
})
