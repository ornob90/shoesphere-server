const { ObjectId } = require("mongodb");
const Cart = require("../../models/Cart");

const deleteSingleCart = async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await Cart.deleteOne({ _id: new ObjectId(id) });
    // console.log(response);
    res.send({
      status: response.acknowledged,
      deleteOne: response.deletedCount > 0,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = deleteSingleCart;
