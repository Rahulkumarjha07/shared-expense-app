const express = require("express");
const router = express.Router();

const {
  addMember,
  getMembers,
  leaveGroup,
} = require("../controllers/memberController");

router.post("/", addMember);

router.get("/:groupId", getMembers);

router.put("/leave/:id", leaveGroup);

module.exports = router;