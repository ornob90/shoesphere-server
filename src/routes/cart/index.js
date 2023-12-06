const addToCart = require("../../api/cart/addToCart");
const deleteFromCart = require("../../api/cart/deleteFromCart");
const deleteSingleFromCart = require("../../api/cart/deleteSingleFromCart");
const getCartByUser = require("../../api/cart/getCartByUser");

const router = require("express").Router();

// GET
router.get("/carts/:id", getCartByUser);

// POST
router.post("/cart", addToCart);

// DELETE
router.delete("/carts", deleteFromCart);
router.delete("/cart/:id", deleteSingleFromCart);

module.exports = router;
