const { ObjectId } = require("mongodb");
const Favorite = require("../../models/favorite");

const deleteFavorite = async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await Favorite.deleteOne({ _id: new ObjectId(id) });

    res.send({
      status: response.acknowledged,
      deleteOne: response.deletedCount > 0,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = deleteFavorite;
