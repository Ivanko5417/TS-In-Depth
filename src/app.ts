import { Category } from './enums';
import { BookRequiredFields, UpdatedBook, CreateCustomerFunctionType } from './types';
// import type { UniversityLibrarian } from './classes/universityLibrarian';
import { Book } from './interfaces';
import { createCustomer } from './functions';
import { RefBook, UniversityLibrarian } from './classes';

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
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
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
// const refBook: RefBook = new RefBook('wikipedia', 2002, 33);
// refBook.printItem();

// Task 05.03
// refBook.printCitation();

// Task 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
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

// Task 06.05
// (async () => {
//     const module = await import('./classes');
//     const reader = new module.Reader();
//     console.log(reader);
// })();

// Task 07.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// const books = purge<Book>(inventory);
// console.log(books);
// const numbers = purge<number>([1,2,3,4,56,7]);
// console.log(numbers);


// Task 07.02
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach((book) => bookShelf.add(book));
// const firstBook: Book = bookShelf.getFirst();
// console.log(firstBook.title);

// const magazines = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazinesShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach((magazine) => magazinesShelf.add(magazine));
// const firstMagazine: Magazine = magazinesShelf.getFirst();
// console.log(firstMagazine.title);

// Task 07.03
// magazinesShelf.printTitles();
// const magazine = magazinesShelf.find('Five Points');
// console.log(magazine);

// Task 07.04
// const book: BookRequiredFields = {
//     id: 1,
//     author: 'Ben',
//     title: 'Five Points',
//     category: Category.CSS,
//     markDamaged: null,
//     pages: 11,
//     available: false,
// };
// const updatedBook: UpdatedBook = {
//     id: 13,
//     author: 'John'
// };
//
// const params: Parameters<CreateCustomerFunctionType> = ['Anna'];
// createCustomer(...params);

// Task 08.01
// const l = new UniversityLibrarian();
// console.log(l);

// Task 08.02
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Ben';
// fLibrarian.assistCustomer('Petr');
// fLibrarian['printLibrarian']();
// console.log(fLibrarian);

// Task 08.03
// fLibrarian.assistFaculty = null;
// fLibrarian.teachCommunity = null;

// Task 08.04
// const e = new RefBook('No title', 2019, 12);
// e.printItem();

// Task 08.05
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Ben';
// fLibrarian.assistCustomer('Petr');
// fLibrarian['printLibrarian']();

// Task 08.06
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Ben';
// console.log(fLibrarian.name);
// fLibrarian.assistCustomer('Petr');

// Task 08.07
// const e = new RefBook('No title', 2019, 12);
// e.copies = 0;
// console.log(e);
