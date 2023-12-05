const addProduct = require("../../api/product/addProduct");
const getNewArrivals = require("../../api/product/getNewArrivals");
const getProductFilter = require("../../api/product/getProductFilter");
const getSingleProduct = require("../../api/product/getSingleProduct");

const router = require("express").Router();

// GET
router.get("/products", getProductFilter);
router.get("/new-arrivals", getNewArrivals);
router.get("/product/:id", getSingleProduct);

// POST
router.post("/product", addProduct);

module.exports = router;
