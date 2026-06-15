# SCOPE.md

## Database Schema

* users
* groups_table
* group_members
* expenses
* expense_shares
* settlements

---

## Detected Data Anomalies

### Duplicate Expenses

Policy:

* Flag for user approval
* Do not silently delete

---

### Negative Amount

Policy:

* Treat as refund
* Show in import report

---

### Missing Amount

Policy:

* Skip record
* Report anomaly

---

### Invalid Currency

Policy:

* Flag anomaly
* Default policy documented

---

### Membership Change

Policy:

* Members should only participate during their membership period.

---

### Settlement Logged as Expense

Policy:

* Flag for manual review.

---

### Different Split Types

Supported:

* EQUAL
* EXACT
* PERCENTAGE

Future:

* SHARES

---

## Import Policy

1. Parse CSV
2. Detect anomalies
3. Generate import report
4. Store valid records
5. Log skipped records
