const addFavorite = require("../../api/favorite/addFavorite");

const router = require("express").Router();

// POST
router.post("/favorite", addFavorite);

module.exports = router;
