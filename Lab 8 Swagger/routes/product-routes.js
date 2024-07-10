const express = require("express");
const productController = require("../controller/estore-products-controller");
const router = express.Router();

router.get("/", (req, res) => {
  productController.getProductAPI(req, res);
});

module.exports = router;
