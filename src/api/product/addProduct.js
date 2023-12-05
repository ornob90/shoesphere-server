const Product = require("../../models/Product");
const Brand = require("../../models/brand");

const addProduct = async (req, res, next) => {
  try {
    const data = req.body;

    const product = new Product(data);

    const brand = {
      name: product.brand,
      logo: product.brandLogo,
    };

    const response = await Brand.updateOne({ name: brand.name }, brand, {
      upsert: true,
    });

    await product.save();

    res.send({
      insertOne: true,
      newBrand: response.modifiedCount > 0,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = addProduct;
