const Product = require("../../models/Product");

const getProductFilter = async (req, res, next) => {
  try {
    const query = req.query || {};

    const products = await Product.find(query);

    res.send(products);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getProductFilter;
