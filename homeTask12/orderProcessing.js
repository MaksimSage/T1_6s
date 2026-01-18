class OrderProcessor {
    processOrder() {
        this.validate()
        this.calculatePrice()
        this.pay()
        this.notification()
    }

    validate() {
        throw new Error('Метод validate должен быть реализован')
    }

    calculatePrice() {
        throw new Error('Метод calculatePrice должен быть реализован')
    }

    pay() {
        throw new Error('Метод pay должен быть реализован')
    }

    notification() {
        console.log('Заказ оформлен')
    }
}

export class DigitalOrderProcessor extends OrderProcessor {
    constructor(email) {
        super()
        this.email = email
    }

    validate() {
        console.log('Проверка email')
    }

    calculatePrice() {
        console.log('Расчет цены только за товар')
    }

    pay() {
        console.log('Онлайн оплата')
    }

    notification() {
        console.log('Ссылка отправлена')
    }
}


export class PhysicalOrderProcessor extends OrderProcessor {
    constructor(address) {
        super()
        this.address = address
    }

    validate() {
        console.log('Проверка адреса')
    }

    calculatePrice() {
        console.log('Расчет цены товара с доставкой')
    }

    pay() {
        console.log('Оплата при получении')
    }
}
