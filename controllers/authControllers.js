const userModel = require("./../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { v4: uuidv4 } = require("uuid");



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
