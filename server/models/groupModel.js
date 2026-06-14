const db = require("../config/db");

// Create Group
const createGroup = (name, created_by, callback) => {
  const sql =
    "INSERT INTO groups_table (name, created_by) VALUES (?, ?)";

  db.query(sql, [name, created_by], callback);
};

// Get All Groups
const getAllGroups = (callback) => {
  const sql = "SELECT * FROM groups_table";

  db.query(sql, callback);
};

// Get Group By ID
const getGroupById = (id, callback) => {
  const sql = "SELECT * FROM groups_table WHERE id = ?";

  db.query(sql, [id], callback);
};

module.exports = {
  createGroup,
  getAllGroups,
  getGroupById,
};