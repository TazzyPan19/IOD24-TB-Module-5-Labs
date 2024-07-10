const express = require("express");
const calculatorController = require('../controller/calculator-controller');
const router = express.Router();

router.get("/add", (req, res) => {
  calculatorController.addNumber(req, res);
});

router.get("/subtraction", (req, res) => {
  calculatorController.subNumber(req, res);
});

router.get("/divide", (req, res) => {
  calculatorController.divideNumber(req, res);
});

router.get("/multiply", (req, res) => {
  calculatorController.multiplyNumber(req, res);
});

module.exports = router;
