"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addBook(list, book) {
    return [...list, book];
}
function findByIsbn(list, isbn) {
    return list.find((b) => b.isbn === isbn);
}
const empty = [];
const withOne = addBook(empty, {
    id: "b1",
    title: "Clean Code",
    isbn: "978-0132350884",
    author: "Martin",
});
console.log(empty.length);
console.log(withOne.length);
console.log(findByIsbn(withOne, "978-0132350884")?.title);
console.log(findByIsbn(withOne, "000")); // undefined
//# sourceMappingURL=library.js.map