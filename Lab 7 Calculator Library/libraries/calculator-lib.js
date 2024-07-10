const LoggerApp = require("../libraries/logger")

class Calculator {
  constructor() {
    this.logger = new LoggerApp();
  }

  add(num1, num2) {
    const value = num1 + num2;
    this.logger.logMsg(value)
    return value;
  }

  subtract(num1, num2) {
    const value = num1 - num2;
    this.logger.logMsg(value)
    return value;
  }

  divide(num1, num2) {
    const value = num1 / num2;
    this.logger.logMsg(value)
    return value;
  }

  multiply(num1, num2) {
    const value = num1 * num2;
    this.logger.logMsg(value)
    return value;
  }
}

// NOTE Testing Functionality

let myCalc1 = new Calculator();
// let myCalc2 = new Calculator();

// myCalc1.add(4,2);
// myCalc2.add(4,5);

setInterval(() => {
  myCalc1.add(2,2);
}, 3000);

module.exports = Calculator;
