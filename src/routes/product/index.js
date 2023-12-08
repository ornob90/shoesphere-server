const addProduct = require("../../api/product/addProduct");
const getNewArrivals = require("../../api/product/getNewArrivals");
const getProductFilter = require("../../api/product/getProductFilter");
const getSingleProduct = require("../../api/product/getSingleProduct");
const getSuggestProduct = require("../../api/product/getSuggestProduct");
const getTotalProductCount = require("../../api/product/getTotalProductCount");

const router = require("express").Router();

// GET
router.get("/products", getProductFilter);
router.get("/new-arrivals", getNewArrivals);
router.get("/product/:id", getSingleProduct);
router.get("suggested-product", getSuggestProduct);
router.get("/product-count", getTotalProductCount);

// POST
router.post("/product", addProduct);

// PUT

module.exports = router;
