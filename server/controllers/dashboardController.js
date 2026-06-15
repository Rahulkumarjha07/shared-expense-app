const db = require("../config/db");

const getStats = (req, res) => {

  const sql = `
    SELECT
      (SELECT COUNT(*) FROM groups_table) AS totalGroups,
      (SELECT COUNT(*) FROM expenses) AS totalExpenses,
      (SELECT IFNULL(SUM(amount),0) FROM expenses) AS totalExpense
  `;

  db.query(sql, (err, result) => {

    if (err) {

      console.log(err);

      return res.status(500).json({
        message: "Database Error",
        error: err.message
      });

    }

    res.json(result[0]);

  });

};

module.exports = {
  getStats
};