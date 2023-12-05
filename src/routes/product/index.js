const addProduct = require("../../api/product/addProduct");
const getProductFilter = require("../../api/product/getProductFilter");

const router = require("express").Router();

// GET
router.get("/products", getProductFilter);

// POST
router.post("/product", addProduct);

module.exports = router;
