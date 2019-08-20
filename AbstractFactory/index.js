const EmployeerFactory = require('./factories/employee-factory');
const VendorFactory = require('./factories/vendor-factory');

const persons = [];

persons.push(EmployeerFactory.create("Elder"));
persons.push(EmployeerFactory.create("Igor"));
persons.push(VendorFactory.create("Leo"));
persons.push(VendorFactory.create("Marcão"));

persons.forEach(person  => {
  console.log(person.say());
});
