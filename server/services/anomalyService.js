function detectAnomalies(rows) {

  const anomalies = [];
  const seen = new Set();

  rows.forEach((row, index) => {

    // Duplicate
    const key = JSON.stringify(row);

    if (seen.has(key)) {
      anomalies.push({
        row: index + 1,
        anomaly: "Duplicate Entry",
        action: "Needs User Approval"
      });
    } else {
      seen.add(key);
    }

    // Missing amount
    if (!row.amount || row.amount === "") {
      anomalies.push({
        row: index + 1,
        anomaly: "Missing Amount",
        action: "Skipped"
      });
    }

    // Negative amount
    if (!isNaN(Number(row.amount)) && Number(row.amount) < 0) {
      anomalies.push({
        row: index + 1,
        anomaly: "Negative Amount",
        action: "Treat as Refund"
      });
    }

    // Currency check
    if (
      row.currency &&
      row.currency !== "INR" &&
      row.currency !== "USD"
    ) {
      anomalies.push({
        row: index + 1,
        anomaly: "Invalid Currency",
        action: "Skipped"
      });
    }

  });

  return anomalies;
}

module.exports = {
  detectAnomalies
};