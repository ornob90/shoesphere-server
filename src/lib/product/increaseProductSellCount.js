const { ObjectId } = require("mongodb");
const Product = require("../../models/Product");

const increaseProductSellCount = async (productID) => {
  try {
    const product = await Product.findOne({ _id: new ObjectId(productID) });

    const response = await Product.updateOne(
      { _id: new ObjectId(productID) },
      {
        $set: {
          sellCount: product.sellCount + 1,
        },
      }
    );

    return response.modifiedCount > 0;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

module.exports = increaseProductSellCount;
