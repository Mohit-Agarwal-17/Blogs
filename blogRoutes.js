const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { getPosts, composePost, getPost } = require("../controllers/blogController");


router.get("/", getPosts);
router.post("/compose", protect, composePost)
router.get("/:id", getPost)

module.exports = router;