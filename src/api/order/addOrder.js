const addOrder = async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = addOrder;
