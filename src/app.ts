
enum Category {
    Javascript,
    CSS,
    HTML,
    TypeScript,
    Angular
}

type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
};


function getAllBooks(): readonly Book[] {
    const books = <const> [
        {id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.Javascript},
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.Javascript
        },
        {id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS},
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.Javascript
        }
    ];
    return books;
}

function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    const firstAvailableBook = books.find(({ available }) => available);
    console.log(books.length);
    console.log(firstAvailableBook.title);
}


function getBookTitlesByCategory(category: Category = Category.Javascript): Array<string> {
    const books: readonly Book[] = getAllBooks();
    return books
        .filter((book: Book) => book.category === category)
        .map((book: Book) => book.title);
}

function logBookTitles(titles: string[]): void {
    console.log(titles);
}

function getBookAuthorByIndex(index: number): [string, string] {
    const book = getAllBooks()[index];
    return [book.title, book.author];
}

function calcTotalPages(): bigint {
    const data = <const>[
        {lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250},
        {lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300},
        {lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280}
    ];

    return data.reduce((acc, item) => {
        return acc + BigInt(item.books) * BigInt(item.avgPagesPerBook);
    }, BigInt(0));
}

function createCustomerID(clientId: number, clientName: string): string {
    return `${clientName}-${clientId}`;
}

function craeteCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);
    if (age !== undefined) {
        console.log(`Customer age: ${age}`);
    }
    if (city !== undefined) {
        console.log(`Customer city: ${city}`);
    }
}

function getBookByID(id: number): Book {
    const books: ReadonlyArray<Book> = getAllBooks();
    return books.find((book: Book) => book.id === id);
}

function checkoutBooks(customer: string , ...booksIDs: number []): string[] {
    console.log(`Checking books for ${customer}`);

    return booksIDs
        .map(id => getBookByID(id))
        .filter(book => book && book.available)
        .map(book => book.title);
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: [number | boolean | string, boolean?]): string[] {
    const books = getAllBooks();
    if (args.length === 1) {
        if (typeof  args[0] === 'string') {
            const [author] = args;
            return books
                .filter(book => book.author === author)
                .map(book => book.title);
        }
        if (typeof args[0] === 'boolean') {
            return books
                .filter(book => book.available)
                .map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;
        if (typeof  id === 'number' && typeof available === 'boolean') {
            return books
                .filter(book => book.available && book.id === id)
                .map(book => book.title);
        }
    }
}

function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new TypeError('value should have been a string');
    }
}

function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join();
}


// Task 03.01
let idGenerator: (id: number, name: string) => string =
  (id: number, name: string) => `${name}-${id}`;
idGenerator = createCustomerID;

const myId = idGenerator(10, 'Ann');
// Task 03.02
console.log(checkoutBooks('Ivan', 1,23,4));

// Task 03.03
const checkedOutBooks = getTitles(false);
console.log(checkedOutBooks);

// Task 03.04
console.log(bookTitleTransform('JavaScript'));
console.log(bookTitleTransform(1));


