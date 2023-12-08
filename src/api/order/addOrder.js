const getCartProduct = require("../../lib/cart/getCartProducts");
const Order = require("../../models/order");

const addOrder = async (req, res, next) => {
  try {
    const { id: userID } = req.params;
    const { transactionID } = req.body;

    if (!transactionID) {
      res.status(400).send({ message: "BAD REQUEST! Transaction ID required" });
    }

    const cartProducts = await getCartProduct(userID);

    // const order = new Order(data);

    // await order.save();

    res.send(cartProducts);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = addOrder;
