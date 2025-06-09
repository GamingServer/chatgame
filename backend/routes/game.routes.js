const router = require("express").Router();

const {
  isPlayerAlreadyPlayed,
  ApprovePoints,
  upload,
  uploadPoints,
} = require("../controller/game.controller");

router.post("/isPlayerAlreadyPlayed", isPlayerAlreadyPlayed);
router.post("/ApprovePoints", ApprovePoints);
router.post("/uploadPoints/:username/:category", upload.single("file"), uploadPoints);

module.exports = router;
