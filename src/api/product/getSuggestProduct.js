const { ObjectId } = require("mongodb");
const Product = require("../../models/Product");

const getSuggestProduct = async (req, res, next) => {
  try {
    const { brands } = req.body;
    const brandsObjectId = brands.map((brand) => new ObjectId(brand));
    const products = await Product.find({ brand: { $in: brandsObjectId } });
    res.send(products);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getSuggestProduct;
