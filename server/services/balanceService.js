const db = require("../config/db");

const calculateBalance = (groupId, callback) => {

  const sql = `
    SELECT
      u.id,
      u.name,

      IFNULL((
        SELECT SUM(e.amount)
        FROM expenses e
        WHERE e.paid_by = u.id
        AND e.group_id = ?
      ),0) AS total_paid,

      IFNULL((
        SELECT SUM(es.share_amount)
        FROM expense_shares es
        JOIN expenses e
        ON es.expense_id = e.id
        WHERE es.user_id = u.id
        AND e.group_id = ?
      ),0) AS total_share

    FROM users u

    WHERE u.id IN (

      SELECT user_id
      FROM group_members
      WHERE group_id = ?

    );
  `;

  db.query(

    sql,

    [groupId, groupId, groupId],

    (err, result) => {

      if (err) {
        return callback(err);
      }

      const balances = result.map((user) => ({

        id: user.id,

        name: user.name,

        total_paid: Number(user.total_paid),

        total_share: Number(user.total_share),

        net_balance:
          Number(user.total_paid) -
          Number(user.total_share)

      }));

      callback(null, balances);

    }

  );

};

// ⭐ Alias for settlement
const calculateSettlement = calculateBalance;

module.exports = {

  calculateBalance,

  calculateSettlement

};