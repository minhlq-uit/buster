const express = require("express");
const router = express.Router();
const {
  getMyListMovie,
  deleteMyListMovieItem,
  addMyListMovieItem,
  getMyListSeries,
  deleteMyListSeriesItem,
  addMyListSeriesItem,
} = require("../controllers/myList");
const { protect } = require("../middleware/auth");

router.route("/getList/movie").get(protect, getMyListMovie);
router.route("/deleteListItem/movie").delete(protect, deleteMyListMovieItem);
router.route("/addListItem/movie").put(protect, addMyListMovieItem);
router.route("/getList/series").get(protect, getMyListSeries);
router.route("/deleteListItem/series").delete(protect, deleteMyListSeriesItem);
router.route("/addListItem/series").put(protect, addMyListSeriesItem);
module.exports = router;
