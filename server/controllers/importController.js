const importService = require("../services/importService");
const anomalyService = require("../services/anomalyService");
const expenseModel = require("../models/expenseModel");

const importCSV = (req, res) => {

  if (!req.file) {
    return res.status(400).json({
      message: "CSV file required"
    });
  }

  importService.importFile(req.file.path, (err, data) => {

    if (err) {
      return res.status(500).json({
        message: "Import failed",
        error: err.message
      });
    }

    const rows = data.data;

    console.log("TOTAL ROWS:", rows.length);

    const anomalies =
      anomalyService.detectAnomalies(rows);

    let imported = 0;
    let failed = 0;

    if (rows.length === 0) {
      return res.json({
        message: "No rows found in CSV"
      });
    }
    
    rows.forEach((row, index) => {

  // Temporary: use an existing user id
  const paidBy = 1;

  // Convert date to YYYY-MM-DD
  let expenseDate = "2026-01-01";

  if (row.date) {

    const d = row.date.toString().trim();

    if (d.includes("/")) {

      const parts = d.split("/");

      if (parts.length === 3) {
        expenseDate =
          `${parts[2]}-${parts[1]}-${parts[0]}`;
      }

    } else if (d === "Mar 14") {

      expenseDate = "2026-03-14";

    }

  }

  expenseModel.importExpense(

    {

      group_id: 1,

      title:
        row.description ||
        "Imported Expense",

      amount:
        parseFloat(
          String(row.amount || "0").replace(/,/g, "")
        ) || 0,

      currency:
        row.currency || "INR",

      paid_by:
        paidBy,

      expense_date:
        expenseDate,

      split_type:
        "EQUAL"

    },

    (err) => {

      if (err) {

        failed++;

        console.log(
          "Row",
          index + 1,
          err.message
        );

      } else {

        imported++;

      }

      if (imported + failed === rows.length) {

        return res.status(200).json({

          message: "CSV Imported Successfully",

          totalRows: rows.length,

          importedRows: imported,

          failedRows: failed,

          anomaliesDetected: anomalies.length,

          anomalies

        });

      }

    }

  );

});
    
  });

};

module.exports = {
  importCSV
};