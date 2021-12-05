const express = require("express");
const router = express.Router();
const {
  getMyList,
  deleteMyListItem,
  addMyListItem,
} = require("../controllers/myList");
const { protect } = require("../middleware/auth");

router.route("/getList").get(protect, getMyList);
router.route("/deleteListItem").delete(protect, deleteMyListItem);
router.route("/addListItem").put(protect, addMyListItem);
module.exports = router;
