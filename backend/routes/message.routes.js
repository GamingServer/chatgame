const router = require("express").Router();
const { sendMessage,getAllUserMsg, getLastMessagesForAdmin } = require("../controller/message.controller");
router.post("/sendMessage", sendMessage);

router.post("/getAllUserMsg", getAllUserMsg);
router.post("/getLastMessages", getLastMessagesForAdmin);
module.exports = router;
