const express = require('express');
const calculatorController = require('../controllers/calculator-controller');
const router = express.Router();

router.get('/add', (req, res) => {
    calculatorController.addNumber(req, res);
})

router.get('/subtract', (req, res) => {
    calculatorController.subNumber(req, res);
})

router.get('/multiply', (req, res) => {
    calculatorController.multiplyNumber(req, res);
})

router.get('/divide', (req, res) => {
    calculatorController.divideNumber(req, res);
})

module.exports = router;