class Person {
  constructor(name) {
    this.name = name;
    this.planet = "Земя";
  }

  printGreeting = () => {
    console.log(`Здравей, ${this.name} от планетата ${this.planet}`);
  }
}

const p1 = new Person('Beep');
const p2 = new Person('Boop');
const p3 = new Person('Biip');

p1.printGreeting();
p2.printGreeting();
p3.printGreeting();
