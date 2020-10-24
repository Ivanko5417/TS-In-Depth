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
    set publisher(newPublisher: string) {
        // eslint-disable-next-line no-underscore-dangle
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`${ReferenceItem.department} department.`);
    }

    abstract printCitation(): void;
}

export {ReferenceItem};
