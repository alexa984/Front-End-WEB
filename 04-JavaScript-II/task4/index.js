function Person() {
  let salary = 1000;

  this.getSecretSalaryInfo = function () {
    return salary;
  }
}

const person = new Person();
console.log(person.getSecretSalaryInfo());
