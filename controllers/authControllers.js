const userModel = require("./../models/userModel");
const authEmailModel = require("./../models/authEmailModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { v4: uuidv4 } = require("uuid");

exports.registration = (req, res, next) => {
  const id = uuidv4();
  const { email, name, username } = req.body;

  const userDetails = {
    token,
    name,
    username,
    id,
  };
  userModel
    .saveUserDetails(userDetails)
    .then((rowCount) => {
      if (rowCount) {
        res.status(201).json({
          status: "success",
          id,
        });
      }
    })
    .catch((e) => {
      res.status(401).json({
        status: "fail",
        message: "fail to save user Details",
      });
    });
};

exports.signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 12);

    const token = jwt.sign({ id: email }, process.env.JWT_SECRET);
    const authDetails = { email, password: hashPassword };

    const rowCount = await authEmailModel.saveAuthEmailDetails(authDetails);
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
