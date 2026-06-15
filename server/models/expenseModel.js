const db = require("../config/db");

// Create Expense
const createExpense = (data, callback) => {

    const sql = `
    INSERT INTO expenses
    (
        group_id,
        title,
        amount,
        currency,
        paid_by,
        expense_date,
        split_type
    )
    VALUES (?,?,?,?,?,?,?)
    `;

    db.query(
        sql,
        [
            data.group_id,
            data.title,
            data.amount,
            data.currency,
            data.paid_by,
            data.expense_date,
            data.split_type
        ],
        callback
    );

};

// Save Shares
const addExpenseShare = (
    expense_id,
    user_id,
    share_amount,
    callback
) => {

    const sql = `
    INSERT INTO expense_shares
    (
        expense_id,
        user_id,
        share_amount
    )
    VALUES (?,?,?)
    `;

    db.query(
        sql,
        [
            expense_id,
            user_id,
            share_amount
        ],
        callback
    );

};



// Get Expenses By Group
const getExpensesByGroup = (groupId, callback) => {
  const sql = `
    SELECT
      e.*,
      u.name AS paid_by_name
    FROM expenses e
    JOIN users u
      ON e.paid_by = u.id
    WHERE e.group_id = ?
    ORDER BY e.expense_date DESC
  `;

  db.query(sql, [groupId], callback);
};


const deleteExpense = (id, callback) => {

  db.query(
    "DELETE FROM expense_shares WHERE expense_id = ?",
    [id],
    (err) => {

      if (err) return callback(err);

      db.query(
        "DELETE FROM expenses WHERE id = ?",
        [id],
        callback
      );

    }
  );

};

const updateExpense = (id, data, callback) => {

  const sql = `
    UPDATE expenses
    SET
      title=?,
      amount=?,
      currency=?,
      split_type=?
    WHERE id=?
  `;

  db.query(
    sql,
    [
      data.title,
      data.amount,
      data.currency,
      data.split_type,
      id
    ],
    callback
  );

};

const importExpense = (data, callback) => {

  const sql = `
  INSERT INTO expenses
  (
    group_id,
    title,
    amount,
    currency,
    paid_by,
    expense_date,
    split_type
  )
  VALUES (?,?,?,?,?,?,?)
  `;

  db.query(

    sql,

    [

      data.group_id || 1,
      data.title || "Imported Expense",
      Number(data.amount) || 0,
      data.currency || "INR",
      data.paid_by || 1,
      data.expense_date || new Date(),
      data.split_type || "EQUAL"

    ],

    callback

  );

};


module.exports = {
  createExpense,
  addExpenseShare,
  getExpensesByGroup,
  deleteExpense,
  updateExpense,
  importExpense
};