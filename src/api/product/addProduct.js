const Product = require("../../models/Product");

const addProduct = async (req, res, next) => {
  try {
    const data = req.body;

    const product = new Product(data);
    await product.save();

    res.send({
      insertOne: true,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = addProduct;