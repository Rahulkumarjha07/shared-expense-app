const groupModel = require("../models/groupModel");

// Create Group
const createGroup = (req, res) => {
  const { name, created_by } = req.body;

  if (!name || !created_by) {
    return res.status(400).json({
      message: "Name and created_by are required",
    });
  }

  groupModel.createGroup(name, created_by, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Failed to create group",
        error: err.message,
      });
    }

    return res.status(201).json({
      message: "Group created successfully",
      groupId: result.insertId,
    });
  });
};

// Get All Groups
const getAllGroups = (req, res) => {
  groupModel.getAllGroups((err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
      });
    }

    res.status(200).json(result);
  });
};

// Get Group By ID
const getGroupById = (req, res) => {
  const { id } = req.params;

  groupModel.getGroupById(id, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "Group not found",
      });
    }

    res.status(200).json(result[0]);
  });
};

module.exports = {
  createGroup,
  getAllGroups,
  getGroupById,
};