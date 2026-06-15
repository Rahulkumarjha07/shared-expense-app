const db = require("../config/db");

const createUser = (name, email, password, callback) => {
  const sql =
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], callback);
};

const findUserByEmail = (email, callback) => {
  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], callback);
};

// Used by CSV import: find user by name, or create them as a placeholder
const findOrCreateByName = (name, callback) => {

  const cleanName = name.trim().toLowerCase();

  const findSql =
    "SELECT * FROM users WHERE LOWER(name) = ?";

  db.query(findSql, [cleanName], (err, result) => {

    if (err) return callback(err);

    if (result.length > 0) {
      // Found existing user
      return callback(null, result[0].id);
    }

    // Not found — create a placeholder user
    const email = `${cleanName.replace(/\s+/g, ".")}@imported.local`;
    const password = "imported_placeholder";

    const insertSql =
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    db.query(
      insertSql,
      [name.trim(), email, password],
      (err, insertResult) => {
        if (err) return callback(err);
        return callback(null, insertResult.insertId);
      }
    );

  });

};

module.exports = {
  createUser,
  findUserByEmail,
  findOrCreateByName,
};