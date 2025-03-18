const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const { validationResult } = require("express-validator");

module.exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, fullname, email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(401).json({
        success: false,
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await userModel.create({
      username,
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname,
      },
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Registered successfully",
      user: {
        email: newUser.email,
        username: newUser.username,
        userId: newUser._id,
      },
    });
  } catch (error) {
    console.error(`Error occurred during registration: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "An error occurred during registration",
    });
  }
};

module.exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found. Please register.",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password. Please try again.",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,

        username: user.username,
      },
      process.env.JWT_SECRET || "CLIENT_SECRET_KEY",
      { expiresIn: "7d" }
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .json({
        success: true,
        message: "Login successful",
        user: {
          email: user.email,

          userId: user._id,
          userName: user.username,
        },
      });
  } catch (error) {
    console.error(`Error occurred during login: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "An error occurred during login",
    });
  }
};
