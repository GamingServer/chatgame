const router = require("express").Router();
const {
  getCategory,
  addCategory,
  editeCategory,
  deleteCategory,
  saveImage,
  getPendingPoint,
  aprovePoint,
  categoryData,
  getAprovePoint,
  getAllcategoryData,
  getCategoryForUser,
} = require("../controller/Category.controller");
const { upload } = require("../controller/Category.controller");

router.get("/get", getCategory);
router.get("/getforuser/:username", getCategoryForUser);
router.post("/add", addCategory);
router.put("/edit/:id", editeCategory);
router.delete("/delete/:id", deleteCategory);
router.post(
  "/image/:senderName/:receiverName",
  upload.single("file"),
  saveImage
);
router.get("/get/pendingpoint", getPendingPoint);
router.post("/aprove/point", aprovePoint);
router.get("/get/categorydata/:category", categoryData);
router.get("/get/aprovepoint", getAprovePoint);
router.get("/get/alldata", getAllcategoryData);
module.exports = router;
