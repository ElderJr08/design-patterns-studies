class Employee {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log("Eu sou um empregado, meu nome é: ", this.name);
  }
}

module.exports = Employee;