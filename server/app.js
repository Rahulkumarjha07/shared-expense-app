require("dotenv").config();

require("./config/db");

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Register auth routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Shared Expense API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});