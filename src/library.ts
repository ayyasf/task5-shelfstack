// الأنواع والواجهات
type BookId = string;

interface Book {
    readonly id: BookId; 
    title: string;
    isbn: string;
    author: string;
}

interface Loan {
    id: string;
    bookId: BookId;
    memberId: string;
}

function addBook(list: Book[], book: Book): Book[] {
    return [...list, book];
}

function findByIsbn(list: Book[], isbn: string): Book | undefined {
    return list.find((b) => b.isbn === isbn);
}

const empty: Book[] = [];
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