const addUser = require("../../api/user/addUser");
const getSingleUser = require("../../api/user/getSingleUser");
const getUserRole = require("../../api/user/getUserRole");

const router = require("express").Router();

// GET
router.get("/user/:email", getSingleUser);
router.get("/user/role/:email", getUserRole);

// POST
router.post("/user", addUser);

module.exports = router;
