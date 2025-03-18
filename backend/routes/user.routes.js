const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/auth.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("username")
      .isLength({ min: 3 })
      .withMessage("Username must be at least 3 characters."),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long "),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters long"),
  ],
  userController.register
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters long"),
  ],
  userController.login
);

module.exports = router;
