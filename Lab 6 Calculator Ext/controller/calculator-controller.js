function addNumber(req, res) {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    let sum = number1 + number2;
    
    console.log(sum)
    res.status(200)
    res.json({result: sum})
}

function subNumber(req, res) {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    let sum = number1 - number2;
    
    console.log(sum)
    res.status(200)
    res.json({result: sum})
}

function multiplyNumber(req, res) {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    let sum = number1 * number2;
    
    console.log(sum)
    res.status(200)
    res.json({result: sum})
}

function divideNumber(req, res) {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    let sum = number1 / number2;
    
    console.log(sum)
    res.status(200)
    res.json({result: sum})
}

module.exports = {
    addNumber,
    subNumber,
    divideNumber, 
    multiplyNumber
}