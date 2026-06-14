const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if all fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check if user already exists
    userModel.findUserByEmail(email, async (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Database error",
        });
      }

      if (result.length > 0) {
        return res.status(400).json({
          message: "Email already exists",
        });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Save user
      userModel.createUser(
        name,
        email,
        hashedPassword,
        (err, data) => {
          if (err) {
            return res.status(500).json({
              message: "Failed to register user",
            });
          }

          return res.status(201).json({
            message: "User registered successfully",
          });
        }
      );
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  register,
};