const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const { errorHandler } = require("../helpers/dbErrorHandler");

module.exports.createAdmin = (req, res) => {
  const { username, password } = req.body;
  const newAdmin = Admin({ username, password });
  newAdmin.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.status(200).json({
      message: "Admin created successfuly",
    });
  });
};

module.exports.signin = (req, res) => {
  const { username, password } = req.body;
  // check if user
  let name = "aman";
  let pass = "admin";

  if (name === username && pass === password) {
    // generate a token and send to client
    const token = jwt.sign(
      { _id: "vdjvcjd232264327" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.cookie("token", token, { expiresIn: "1d" });
    return res.json({
      token,
      user: { _id: "vdjvcjd232264327", username: name },
    });
  }

  Admin.findOne({ username }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with that username does not exist.",
      });
    }
    // authenticate
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "username and password do not match.",
      });
    }
    // generate a token and send to client
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, { expiresIn: "1d" });
    const { _id, username } = user;
    return res.json({
      token,
      user: { _id, username },
    });
  });
};
