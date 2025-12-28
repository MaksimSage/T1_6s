class DrinkCoffee {
  constructor(setting){
    const {base, milk, sugar, cream} = setting 
    
    this.base = base
    this.milk = milk
    this.sugar = sugar
    this.cream = cream
  }
}

class DrinkBuilder {
  settings = {
    base: 'espresso',
  }

  addMilk = () => {
    this.settings.milk = true
    return this
  }

  addSugar = () => {
    this.settings.sugar = true
    return this
  }

  addCream = () => {
    this.settings.cream = true
    return this
  }

  build = () => new DrinkCoffee(this.settings)
}

const latte = new DrinkBuilder().addMilk().build()
const withSugarAndCream = new DrinkBuilder().addSugar().addCream().build()

console.log(latte);
