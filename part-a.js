
class LibraryItem {
    constructor({ id, title }) {
    this.id = id;
    this.title = title;
    this.isAvailable = true;
    }

    describe() {
    return` ${this.title} (${this.id})`;
    }

    borrow() {
    this.isAvailable = false;
    }

    returnItem() {
    this.isAvailable = true;
    }
}

class Book extends LibraryItem {
    constructor({ id, title, isbn, author }) {
        super({ id, title });
        this.isbn = isbn;
        this.author = author;
    }

    describe() {
        return `${super.describe()} - by ${this.author}, ISBN: ${this.isbn}`;
    }
}

class Member {
    #balance = 0; 

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    deposit(n) {
    this.#balance += n;
    }

    getBalance() {
    return this.#balance;
    }
}

class LibraryCatalog {
    items = [];
    static #counter = 0;

    static nextId() {
    LibraryCatalog.#counter += 1;
    return `b${LibraryCatalog.#counter}`;
    }

    addItem(book) {
    this.items.push(book);
    }

    registerLoan({ memberId, itemId }) {
        const item = this.items.find((i) => i.id === itemId);
            if (!item || !item.isAvailable) {
            console.log(`Loan failed for item ${itemId}`);
            return false;
    }
    item.borrow();
    console.log(`Member ${memberId} borrowed ${item.title}`);
    return true;
    }

    snapshotStats() {
    const total = this.items.length;
    const available = this.items.filter((i) => i.isAvailable).length;
    return { total, available };
    }
}

const catalog = new LibraryCatalog();

const [id1, id2] = [LibraryCatalog.nextId(), LibraryCatalog.nextId()];

catalog.addItem(
    new Book({ id: id1, title: "Clean Code", isbn: "978-0132350884", author: "Martin" })
);
catalog.addItem(
    new Book({ id: id2, title: "The Pragmatic Programmer", isbn: "978-0135957059", author: "Hunt" })
);

const member = new Member("m1", "Hanin");
member.deposit(10);
console.log("Balance:", member.getBalance());

catalog.registerLoan({ memberId: member.id, itemId: id1 });

console.log(catalog.items[0].describe());

const { total, available } = catalog.snapshotStats();
console.log("total:", total, "available:", available);