const ElementOfTheQuestionnaire = require('../Component/element-of-the-questionnaire');

class Bloc extends ElementOfTheQuestionnaire {
  constructor(description) {
    super(description);

    this.elements = [];
    
  }

  display() {
    console.log(`Bloco: ${this.Description}`);
    this.elements.forEach(element => {
      element.display();
    });
  }

  add(element) {
    this.elements.push(element);
  }

  remove(element) {
    const length = this.elements.length;
    for (let i = 0; index < length; i++) {
      if(this.elements[i] === element){
        this.elements.splice(i, 1);
        return;
      }      
    }
  }
  

}

module.exports = Bloc;