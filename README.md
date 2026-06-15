# shared-expense-app
# Shared Expense Management App

## Overview

A full-stack web application for managing shared expenses among groups. The application supports user authentication, group management, expense tracking, balance calculation, settlements, and CSV import functionality.

## Features

* User Login & Registration
* Group Creation & Management
* Member Management
* Expense Management
* Balance Summary
* Settlement Recording
* Dashboard
* CSV Import
* MySQL Database

## Tech Stack

### Frontend

* React
* Vite
* Bootstrap
* Axios
* React Router

### Backend

* Node.js
* Express.js

### Database

* MySQL

## Installation

### Backend

```bash
cd server
npm install
nodemon app.js
```

### Frontend

```bash
cd client
npm install
npm run dev
```

## Environment Variables

Create a `.env` file:

```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
JWT_SECRET=
```

## AI Used

ChatGPT was used as a development assistant for debugging, code generation, and architectural suggestions.

## Future Improvements

* Dynamic membership timeline
* Multiple currency conversion
* Advanced settlement optimization
* Better anomaly handling
* Role-based authentication
