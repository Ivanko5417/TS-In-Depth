import { ShelfItem } from '../interfaces';

export class Shelf<T extends ShelfItem>{
    items: Array<T> = [];

    add(item: T) {
        // eslint-disable-next-line no-underscore-dangle
        this.items.push(item);
    }

    getFirst(): T {
        // eslint-disable-next-line no-underscore-dangle
        return this.items[0];
    }

    find(title: string): T {
        return this.items.find(item => item.title === title);
    }

    printTitles(): void {
        this.items.forEach(item => console.log(item.title));
    }
}
