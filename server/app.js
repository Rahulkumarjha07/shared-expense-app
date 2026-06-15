require("dotenv").config();

require("./config/db");

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const groupRoutes = require("./routes/groupRoutes");
const memberRoutes = require("./routes/memberRoutes");
const expenseRoutes=require("./routes/expenseRoutes");
const balanceRoutes =require("./routes/balanceRoutes");
const settlementRoutes =
require("./routes/settlementRoutes");

const importRoutes=require("./routes/importRoutes");   

const dashboardRoutes =
require("./routes/dashboardRoutes");

const settlementHistoryRoutes =
require("./routes/settlementHistoryRoutes");

const app = express();



app.use(cors({
  origin: [
    "https://shared-expense-app-murex.vercel.app",
    "http://localhost:5173"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

// Register auth routes
app.use("/api/auth", authRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/expenses",expenseRoutes);
app.use("/api/import",importRoutes);

app.use(
"/api/dashboard",
dashboardRoutes
);

app.use(
"/api/balance",
balanceRoutes
);

app.use(
    "/api/settlement",
    settlementRoutes
);

app.get("/", (req, res) => {
    res.send("Shared Expense API Running...");
});

app.use(
"/api/settlement-history",
settlementHistoryRoutes
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});