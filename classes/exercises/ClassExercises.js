// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, numOfCheckout, discarded ){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numberOfPages = numberOfPages;
        this.numOfCheckout = numOfCheckout;
        this.discarded = discarded;
    }

    checkOut(uses = 1) {
        this.numOfCheckout += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, numOfCheckout, discarded ) {
        super(title, author, copyrightDate, isbn, numberOfPages, numOfCheckout, discarded );
    }

dispose(currentYear) {
if (currentYear > 5) {
    this.discarded = "yes";
}
}
}


class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, numOfCheckout, discarded ) {
        super(title, author, copyrightDate, isbn, numberOfPages, numOfCheckout, discarded );
    }

dispose(numOfCheckout) {
if (numOfCheckout > 100) {
    this.discarded = "yes";
}
}
}
// Declare the objects for exercises 2 and 3 here:

let novel1 = new Novel("Pride and Prejudice", "Jane Austen", 1813, 	1111111111111, 432, 32, "No");
let manual1 = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");

// Code exercises 4 & 5 here:
novel1.checkOut(5);
novel1.dispose();
console.log(novel1);
manual1.checkOut(5);
manual1.dispose(2024);
console.log(manual1);
