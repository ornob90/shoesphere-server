const Cart = require("../../models/Cart");

const addToCart = async (req, res, next) => {
  try {
    const data = req.body;
    const cart = new Cart(data);

    await cart.save();

    res.send({
      insertOne: true,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = addToCart;
