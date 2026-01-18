class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    accept(visitor) {
        throw new Error('Метод accept должен быть реализован');
    }
}

class Visitor {
    visitBook(book) {
        throw new Error('Метод visitBook должен быть реализован');
    }
    
    visitVideoGame(game) {
        throw new Error('Метод visitVideoGame должен быть реализован');
    }
    
    visitLaptop(laptop) {
        throw new Error('Метод visitLaptop должен быть реализован');
    }
}

export class Book extends Product {
    accept(visitor) {
        visitor.visitBook(this);
    }
}

export class VideoGame extends Product {
    accept(visitor) {
        visitor.visitVideoGame(this);
    }
}

export class Laptop extends Product {
    accept(visitor) {
        visitor.visitLaptop(this);
    }
}

export class PriceVisitor extends Visitor {
    constructor() {
        super();
        this.total = 0;
    }
    
    visitBook(book) {
        this.total += book.price;
    }
    
    visitVideoGame(game) {
        this.total += game.price;
    }
    
    visitLaptop(laptop) {
        this.total += laptop.price;
    }
    
    getTotal() {
        return this.total;
    }
}

export class ReportVisitor extends Visitor {
    constructor() {
        super();
        this.reportLines = [];
    }
    
    visitBook(book) {
        this.reportLines.push(`Книга: "${book.name}" - ${book.price} руб.`);
    }
    
    visitVideoGame(game) {
        this.reportLines.push(`Игра: "${game.name}" - ${game.price} руб.`);
    }
    
    visitLaptop(laptop) {
        this.reportLines.push(`Ноутбук: "${laptop.name}" - ${laptop.price} руб.`);
    }
    
    printReport() {
        console.log('Отчет:');
        this.reportLines.forEach(l => console.log(l));
    }
}
