
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

function logFirstAvailable(books: readonly Book[]): void {
    const firstAvailableBook = books.find(({ available }) => available);
    console.log(books.length);
    console.log(firstAvailableBook.title);
}


function getBookTitlesByCategory(category: Category): Array<string> {
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

console.log(calcTotalPages());
