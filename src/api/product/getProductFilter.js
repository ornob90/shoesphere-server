const { ObjectId } = require("mongodb");
const Product = require("../../models/Product");

const getProductFilter = async (req, res, next) => {
  try {
    const { page, size } = req.query || {};

    const { minPrice: min, maxPrice: max, ...rest } = req.body || {};

    const filterObject = {};

    // Object.keys(rest).forEach((key) => {
    //   if (rest[key].length > 0) {
    //     filterObject[key] = {
    //       $in: rest[key],
    //     };
    //   }
    // });

    // console.log(filterObject);

    if (Array.isArray(rest.brand) && rest.brand.length > 0) {
      // console.log(rest.brand.map((brand) => new ObjectId(brand)));
      const brands = rest.brand.map((brand) => new ObjectId(brand));

      filterObject.brand = {
        // $in: rest.brand.map((brand) => new ObjectId(brand)),
        // $in: rest.brand.map((brand) => new ObjectId(brand)),
        $in: rest.brand,
      };
    }

    if (Array.isArray(rest.available) && rest.available.length > 0) {
      filterObject.available = { $in: rest.available };
    }

    if (Array.isArray(rest.gender) && rest.gender.length > 0) {
      filterObject.gender = { $in: rest.gender };
    }

    // console.log("filterObject : ", filterObject);
    let products = await Product.find({
      price: {
        $gte: min,
        $lte: max,
      },
      ...filterObject,
    })
      .select("name price images brand available gender")
      .skip(page * size)
      .limit(size);

    // console.log(products[0]);

    const filterOptions = Object.keys(rest);

    console.log("before: ", products.length);

    // if (rest.brand.length > 0) {
    //   // console.log(rest.brand);
    //   // const brands = rest.brand.map((brand) => new ObjectId(brand));
    //   console.log(rest.brand);
    //   products = products.filter(({ brand }) => {
    //     // console.log(product);

    //     rest.brand.includes(brand.toString());
    //   });
    // }

    console.log("after: ", products.length);

    res.send(products);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getProductFilter;
