import { stock } from "./orderChecking.js"
import { DigitalOrderProcessor } from "./orderProcessing.js";
import { Book, Laptop, PriceVisitor, ReportVisitor, VideoGame } from "./visitorHandling.js";

const order = {
    hasStock: true,
    hasBalance: true,
    isSuspicious: false
}

const products = [
    new Book('Грокаем', 100),
    new VideoGame('Шахматы', 1500),
    new Laptop('Dell', 200000),
    new Book('Алгоритмы', 450)
];

console.log('Проверка...')
stock.handle(order)
console.log('\n')

console.log('Оформление...');
const digital = new DigitalOrderProcessor('inno@mail.com');
digital.processOrder();
console.log('\n')

console.log('Чек')
const priceVisitor = new PriceVisitor();
const reportVisitor = new ReportVisitor();

products.forEach(p => {
    p.accept(priceVisitor);
    p.accept(reportVisitor);
});

console.log(`Итого: ${priceVisitor.getTotal()} руб.`);
reportVisitor.printReport();