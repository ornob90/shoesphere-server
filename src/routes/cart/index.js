const addToCart = require("../../api/cart/addToCart");
const getCartByUser = require("../../api/cart/getCartByUser");

const router = require("express").Router();

// GET
router.get("/carts/:id", getCartByUser);

// POST
router.post("/cart", addToCart);

module.exports = router;
