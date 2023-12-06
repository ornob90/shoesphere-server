const Product = require("../../models/Product");

const getProductFilter = async (req, res, next) => {
  try {
    const { page, size, ...filterOptions } = req.query || {};

    const products = await Product.find({})
      .select("name price images")
      .skip(page * size)
      .limit(size);

    res.send(products);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getProductFilter;
