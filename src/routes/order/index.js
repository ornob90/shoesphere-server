const addOrder = require("../../api/order/addOrder");
const getOrdersByUser = require("../../api/order/getOrdersByUser");
const updateOrderStatus = require("../../api/order/updateOrderStatus");

const router = require("express").Router();

// GET
router.get("/orders/:id", getOrdersByUser);

// POST
router.post("/order/:id", addOrder);

// PATCH
router.patch("/order/:id", updateOrderStatus);

module.exports = router;
