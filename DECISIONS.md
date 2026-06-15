# DECISIONS.md

## Decision 1

Problem:
Database choice

Options:

* MongoDB
* MySQL

Chosen:
MySQL

Reason:
Relational data and joins are required.

---

## Decision 2

Problem:
Backend framework

Options:

* Django
* Express

Chosen:
Express

Reason:
Fast development and JavaScript ecosystem.

---

## Decision 3

Problem:
CSV Import

Options:

* Manual editing
* Automatic parser

Chosen:
Automatic parser

Reason:
Assignment prohibits manual modification.

---

## Decision 4

Problem:
Duplicate records

Options:

* Auto delete
* User approval

Chosen:
User approval

Reason:
Avoid accidental data loss.

---

## Decision 5

Problem:
Currency handling

Options:

* Ignore currency
* Preserve currency

Chosen:
Preserve currency

Reason:
Supports future exchange-rate conversion.
