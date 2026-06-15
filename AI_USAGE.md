# AI_USAGE.md

## AI Tool Used

* ChatGPT

---

## Primary Uses

* Backend debugging
* React component generation
* SQL query assistance
* API integration
* Error analysis

---

## Example Prompt 1

"Generate Express controller for expense creation."

AI generated initial code which was modified to fit the database schema.

---

## Example Prompt 2

"Create React page for expenses."

Generated component was customized to integrate with Axios and routing.

---

## Example Prompt 3

"Implement CSV import."

AI suggested a generic parser. It required manual adaptation for the provided CSV structure.

---

## AI Mistakes Identified

### Case 1

Issue:
Incorrect field mapping (`title` vs `description`).

Fix:
Mapped CSV columns correctly.

---

### Case 2

Issue:
Suggested imports outside callback scope.

Fix:
Moved logic inside callback.

---

### Case 3

Issue:
Assumed user IDs matched CSV names.

Fix:
Identified the need for explicit mapping between names and database IDs.

---

## Responsibility

All generated code was reviewed, tested, and modified before submission.
