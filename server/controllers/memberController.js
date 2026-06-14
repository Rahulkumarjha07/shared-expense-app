const memberModel = require("../models/memberModel");

// Add Member
const addMember = (req, res) => {
  const { groupId, userId, joinDate } = req.body;

  if (!groupId || !userId || !joinDate) {
    return res.status(400).json({
      message: "groupId, userId and joinDate are required",
    });
  }

  memberModel.addMember(
    groupId,
    userId,
    joinDate,
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to add member",
          error: err.message,
        });
      }

      return res.status(201).json({
        message: "Member added successfully",
        memberId: result.insertId,
      });
    }
  );
};

// Get Members
const getMembers = (req, res) => {
  const { groupId } = req.params;

  memberModel.getMembers(groupId, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
      });
    }

    res.status(200).json(result);
  });
};

// Leave Group
const leaveGroup = (req, res) => {
  const { id } = req.params;
  const { leaveDate } = req.body;

  memberModel.leaveGroup(id, leaveDate, (err) => {
    if (err) {
      return res.status(500).json({
        message: "Failed to update leave date",
      });
    }

    res.status(200).json({
      message: "Member left group successfully",
    });
  });
};

module.exports = {
  addMember,
  getMembers,
  leaveGroup,
};