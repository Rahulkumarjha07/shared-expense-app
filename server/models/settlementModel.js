const db = require("../config/db");

const getAllSettlements = (callback) => {

  const sql = `
  SELECT
  s.id,
  u1.name AS payer,
  u2.name AS receiver,
  s.amount,
  s.created_at
  FROM settlements s
  JOIN users u1
  ON s.from_user=u1.id
  JOIN users u2
  ON s.to_user=u2.id
  ORDER BY s.created_at DESC
  `;

  db.query(sql, callback);

};

module.exports = {
  getAllSettlements
};