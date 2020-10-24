import { Book } from './interfaces';
import { Category } from './enums';
import { BookProperties, BookOrUndefined } from './types';

export function getAllBooks(): readonly Book[] {
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

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    const firstAvailableBook = books.find(({ available }) => available);
    console.log(books.length);
    console.log(firstAvailableBook.title);
}


export function getBookTitlesByCategory(category: Category = Category.Javascript): Array<string> {
    const books: readonly Book[] = getAllBooks();
    return books
        .filter((book: Book) => book.category === category)
        .map((book: Book) => book.title);
}

export function logBookTitles(titles: string[]): void {
    console.log(titles);
}

export function getBookAuthorByIndex(index: number): [string, string] {
    const book = getAllBooks()[index];
    return [book.title, book.author];
}

export function calcTotalPages(): bigint {
    const data = <const>[
        {lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250},
        {lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300},
        {lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280}
    ];

    return data.reduce((acc, item) => {
        return acc + BigInt(item.books) * BigInt(item.avgPagesPerBook);
    }, BigInt(0));
}

export function createCustomerID(clientId: number, clientName: string): string {
    return `${clientName}-${clientId}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);
    if (age !== undefined) {
        console.log(`Customer age: ${age}`);
    }
    if (city !== undefined) {
        console.log(`Customer city: ${city}`);
    }
}

export function getBookByID(id: number): BookOrUndefined {
    const books: ReadonlyArray<Book> = getAllBooks();
    return books.find((book: Book) => book.id === id);
}

export function checkoutBooks(customer: string , ...booksIDs: number []): string[] {
    console.log(`Checking books for ${customer}`);

    return booksIDs
        .map(id => getBookByID(id))
        .filter(book => book && book.available)
        .map(book => book.title);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: [number | boolean | string, boolean?]): string[] {
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

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new TypeError('value should have been a string');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join();
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getBookProp(book: Book, prop: BookProperties) {
    if (typeof book[prop] === 'function') {
        return (book[prop] as Function).name;
    }
    return book[prop];
}

export function purge<T>(inventory: Array<T>): T[] {
    return inventory.slice(2);
}
