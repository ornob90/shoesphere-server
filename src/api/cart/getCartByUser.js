const { ObjectId } = require("mongodb");
const Cart = require("../../models/cart");

const getCartByUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const cartProducts = await Cart.find({ user: new ObjectId(id) }).populate(
      "product"
    );

    res.send(cartProducts);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getCartByUser;
