const express = require("express");

const router = express.Router();

const {
  createExpense,
  getExpenses,deleteExpense
} = require("../controllers/expenseController");

// Create Expense
router.post("/", createExpense);

// Get All Expenses of a Group
router.get("/group/:groupId", getExpenses);
router.delete("/:id", deleteExpense);

module.exports = router;