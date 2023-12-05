const Product = require("../../models/Product");

const getProductFilter = async (req, res, next) => {
  try {
    const { page, size, ...restQuery } = req.query || {};

    const products = await Product.find(restQuery)
      .skip(page * size)
      .limit(size);

    res.send(products);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getProductFilter;
