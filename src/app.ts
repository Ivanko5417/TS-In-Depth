
enum Category {
    Javascript,
    CSS,
    HTML,
    TypeScript,
    Angular
}

interface DamageLogger {
    (p: string): void;
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

type BookProperties = keyof Book;
type PersonBook = Person & Book;
type BookOrUndefined = Book | undefined;

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBookPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}
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

function getBookByID(id: number): BookOrUndefined {
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

function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

function getBookProp(book: Book, prop: BookProperties) {
    if (typeof book[prop] === 'function') {
        return (book[prop] as Function).name;
    }
    return book[prop];
}

abstract class ReferenceItem {
    // title: string;
    // year: number;
    // constructor (newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }
    private _publisher: string;
    static department: string = 'IT';
    constructor (public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem');
    }
    get publisher(): string {
        // eslint-disable-next-line no-underscore-dangle
        return this._publisher.toUpperCase();
    }
    // eslint-disable-next-line no-underscore-dangle
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`${ReferenceItem.department} department.`);
    }

    abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {
    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

class UnivercityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}


// Task 03.01
// let idGenerator: (id: number, name: string) => string =
//   (id: number, name: string) => `${name}-${id}`;
// idGenerator = createCustomerID;

// const myId = idGenerator(10, 'Ann');
// Task 03.02
// console.log(checkoutBooks('Ivan', 1,23,4));

// Task 03.03
// const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);

// // Task 03.04
// console.log(bookTitleTransform('JavaScript'));
// console.log(bookTitleTransform(1));


// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: (reason) => {
//         console.log(`Damaged: ${reason}`);
//     }
// };

// printBook(myBook);
// myBook.markDamaged('missing back cover');


// Task 04.02
// const logDamage: DamageLogger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 04.43
// const favoriteAuthor: Author = {
//     email: 'email@gmail.com',
//     name: 'Ben',
//     numBookPublished: 11
// };
//
// const favoriteLibrarian: Librarian = {
//     email: 'email1@gmail.com',
//     name: 'John',
//     department: 'Fiction',
//     assistCustomer: (name: string) => console.log(`Assist ${name}`)
// };


// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript'
//     }
// };
//
// console.log(offer?.magazine);
// console.log(offer?.magazine?.());

// Task 04.05
// console.log(getBookByID(1), 'title');
// console.log(getBookByID(1), 'markDamaged');
// console.log(getBookProp(getBookByID(1), 'isbn'));

// Task 05.01
// const ref: ReferenceItem = new ReferenceItem('Title', 1999);
// ref.printItem();
// ref.publisher = 'Igor';
// console.log(ref.publisher);

// Task 05.02
// const refBook: Encyclopedia = new Encyclopedia('wikipedia', 2002, 33);
// refBook.printItem();

// Task 05.03
// refBook.printCitation();

// Task 05.04
// const favoriteLibrarian: Librarian = new UnivercityLibrarian();
// favoriteLibrarian.name = 'Ben';
// favoriteLibrarian.assistCustomer('John');

// Task 05.05
// const personBook: PersonBook = {
//     id: 1,
//     author: 'Ben',
//     available: true,
//     category: Category.CSS,
//     email: 'ben@example.com',
//     name: 'John',
//     title: 'Book Book',
//     markDamaged: null,
//     pages: 12
// };
