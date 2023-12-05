const addUser = require("../../api/user/addUser");
const getSingleUser = require("../../api/user/getSingleUser");

const router = require("express").Router();

// GET
router.get("/user/:email", getSingleUser);

// POST
router.post("/user", addUser);

module.exports = router;
