import { RefBook, ReferenceItem } from './classes';
import { Category } from './enums';
import { PersonBook } from './types';
// import type { UniversityLibrarian } from './classes/universityLibrarian';

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
