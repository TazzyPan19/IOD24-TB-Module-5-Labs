const calculatorLib = require('../libraries/calculator-lib');

let calc1 = new calculatorLib();
// let calc2 = new calculatorLib();
// let calc3 = new calculatorLib();
// let calc4 = new calculatorLib();

function addNumber(req, res) {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    let sum = calc1.add(number1, number2);
    
    console.log(sum)
    res.status(200)
    res.json({result: sum});
}

function subNumber(req, res) {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    let sum = calc1.subtract(number1, number2);
    
    console.log(sum)
    res.status(200)
    res.json({result: sum});
}

function multiplyNumber(req, res) {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    let sum = calc1.multiply(number1, number2);
    
    console.log(sum)
    res.status(200)
    res.json({result: sum});
}

function divideNumber(req, res) {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    let sum = calc1.divide(number1, number2);
    
    console.log(sum)
    res.status(200)
    res.json({result: sum});
}

module.exports = {
    addNumber,
    subNumber,
    divideNumber, 
    multiplyNumber
}