const express = require("express");
const router = express.Router();
const productController = require("../controller/ProductController");

// CRUD Routes

router.get("/", productController.getAllProducts);

module.exports = router;