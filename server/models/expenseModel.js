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

module.exports = {
    createExpense,
    addExpenseShare
};