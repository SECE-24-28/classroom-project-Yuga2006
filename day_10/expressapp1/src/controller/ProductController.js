const { products } = require("../models/ProductModel");

// READ ALL
exports.getAllProducts = (req, res) => {
    res.json(products);
};