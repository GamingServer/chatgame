const { getAllUser } = require("../controller/users.controller");

const router = require("express").Router();
router.post("/getAllUser", getAllUser);


module.exports = router;
