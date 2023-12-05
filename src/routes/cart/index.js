const addToCart = require("../../api/cart/addToCart");
const deleteFromCart = require("../../api/cart/deleteFromCart");
const getCartByUser = require("../../api/cart/getCartByUser");

const router = require("express").Router();

// GET
router.get("/carts/:id", getCartByUser);

// POST
router.post("/cart", addToCart);

// DELETE
router.delete("/carts", deleteFromCart);

module.exports = router;
