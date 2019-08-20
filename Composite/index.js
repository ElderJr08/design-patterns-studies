const Bloc = require('./Composite/bloc');
const Question = require('./Leaf/question');

const blocA = new Bloc("A) Formação Educacional");
const question1 = new Question("Qual a sua formação?");
const question2 = new Question("Pretende fazer alguma pós-graduação?");

blocA.add(question1);
blocA.add(question2);

const blocB = new Bloc("B) Habilidades");
const blocB1 = new Bloc("B1) Habilidades Técnicas");
const question3 = new Question("O que é SOLID?");

blocB1.add(question3);
blocB.add(blocB1);

const rootBloc = new Bloc("Inicio");
rootBloc.add(blocA);
rootBloc.add(blocB);

rootBloc.display();
