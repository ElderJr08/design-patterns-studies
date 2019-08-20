class Vendor {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log("Eu sou um fornecedor, meu nome é: ", this.name);
  }
}

module.exports = Vendor;