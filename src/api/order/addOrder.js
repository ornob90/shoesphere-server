const Order = require("../../models/order");

const addOrder = async (req, res, next) => {
  try {
    const data = req.body;
    const order = new Order(data);

    await order.save();

    res.send({
      insertOne: true,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = addOrder;
