const userModel = require("./../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { v4: uuidv4 } = require("uuid");
const e = require("express");

exports.signup = async (req, res, next) => {
  try {
    const id = uuidv4();
    const token = jwt.sign({ id }, process.env.JWT_SECRET);

    const { email, name, username, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 12);

    const userDetails = {
      name,
      username,
      id,
      password: hashPassword,
      email,
    };
    const rowCount = await userModel.saveUserDetails(userDetails);
    if (rowCount) {
      res.status(201).json({
        status: "success",
        token,
      });
    }
  } catch (e) {
    res.status(401).json({
      status: "fail",
      message: "fail to save user Details",
    });
  }
};

exports.login = async (req, res, next) => {
  // try {
  const { email, password } = req.body;
  const userResult = await userModel.getUser({ email });
  const user = userResult[0];
  // console.log(user);
  if (user) {
    const id = user.id;
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    console.log(isPasswordMatch);
    if (isPasswordMatch) {
      const token = jwt.sign({ id }, process.env.JWT_SECRET);

      res.status(201).json({
        status: "success",
        token,
      });
    } else {
      res.status(403).json({
        status: "fail",
        message: "Invalid Email or Password",
      });
    }
  } else {
    res.status(503).json({
      status: "fail",
      message: "Invalid Email or Password",
    });
  }
  // } catch (e) {
  //   res.status(401).json({
  //     status: "fail",
  //     message: "Login Failed",
  //   });
  // }
};
