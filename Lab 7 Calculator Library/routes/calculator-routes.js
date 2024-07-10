const express = require("express");
const router = express.Router();
const calcController = require("../controller/calculator-controller")

// new route for adding two numbers
router.get("/add", (request, response) => {
  calcController.addNumber(request, response);
});

router.get("/subtraction", (request, response) => {
  calcController.subNumber(request, response);
});

router.get("/divide", (request, response) => {
  calcController.divideNumber(request, response);
});

router.get("/multiply", (request, response) => {
  calcController.multiplyNumber(request, response);
});

module.exports = router;
