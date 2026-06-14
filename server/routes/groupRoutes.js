const express = require("express");
const router = express.Router();

const {
  createGroup,
  getAllGroups,
  getGroupById,
} = require("../controllers/groupController");

router.post("/", createGroup);
router.get("/", getAllGroups);
router.get("/:id", getGroupById);

module.exports = router;