const ElementOfTheQuestionnaire = require('../Component/element-of-the-questionnaire');

class Question extends ElementOfTheQuestionnaire {
  constructor(description) {
    super(description)
  }

  display() {
    console.log(`Questão: ${this.Description}`);
  }
}

module.exports = Question;