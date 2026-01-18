class Handler {
    constructor() {
        this.next = null;
    }

    setNext(handler) {
        this.next = handler;
        return handler;
    }

    handle(order) {
        if (this.check(order)) {
            console.log(`${this.constructor.name}: пройдена`);
            
            if (this.next) {
                this.next.handle(order);
            } else {
                console.log('Все проверки пройдены');
            }
        } else {
            console.log(`${this.constructor.name}: не пройдена`);
        }
    }

    check(order) {
        throw new Error('Метод check должен быть реализован');
    }
}

class CheckStockHandler extends Handler {
    check(order) {
        return order.hasStock;
    }
}

class CheckBalanceHandler extends Handler {
    check(order) {
        return order.hasBalance;
    }
}

class CheckFraudHandler extends Handler {
    check(order) {
        return !order.isSuspicious;
    }
}




export const stock = new CheckStockHandler();
const balance = new CheckBalanceHandler();
const fraud= new CheckFraudHandler();

stock.setNext(balance).setNext(fraud);
