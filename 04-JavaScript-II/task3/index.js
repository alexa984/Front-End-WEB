class Item {
  #basePrice;
  constructor(name, discountPercentage){
    this.name = name;
    this.discountPercentage = discountPercentage;
    this.#basePrice = 1000;
  }

  getBasePrice = () => {
    return this.#basePrice;
  }

  calcPrice = () => {
    return ((100 - this.discountPercentage) / 100) * this.#basePrice;
  }
}

const item = new Item("apple", 20);
console.log(item.getBasePrice());
console.log(item.calcPrice());
