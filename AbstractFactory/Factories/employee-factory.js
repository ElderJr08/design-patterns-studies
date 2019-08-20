const Employee = require('../Products/employee');

class EmployeeFactory {

  create(name) {
    return new Employee(name);
  }

}

module.exports = new EmployeeFactory();