const addFavorite = require("../../api/favorite/addFavorite");
const getFavoritesByUser = require("../../api/favorite/getFavoritesByUser");

const router = require("express").Router();

// GET
router.get("/favorites", getFavoritesByUser);

// POST
router.post("/favorite", addFavorite);

module.exports = router;
