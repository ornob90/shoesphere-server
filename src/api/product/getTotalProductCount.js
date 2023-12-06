const Product = require("../../models/Product");

const getTotalProductCount = async (req, res, next) => {
  try {
    const productCount = await Product.estimatedDocumentCount();

    res.send({
      productCount,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getTotalProductCount;
