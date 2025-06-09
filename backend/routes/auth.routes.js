const router = require("express").Router();

const signup = require("../auth/signup");
const signin = require("../auth/signin");

router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
