require("dotenv").config();
const sha256 = require("js-sha256");
const jwt = require("jsonwebtoken");
const UsersDAO = require("../models/UsersDAO");
const {
  RegisterValidation,
  LoginValidation,
} = require("../validations/UsersValidations");

const tokenPass = process.env.JWT;

module.exports = class UsersController {
  static async Register(req, res) {
    try {
      const userObject = req.body;
      const validRequest = RegisterValidation(userObject);
      if (!validRequest) {
        return res.status(400).json({
          success: false,
          message: "Please try filling your data again",
        });
      }

      const existingUser = await UsersDAO.getUserByUsername(
        userObject.username
      );
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message:
            "this user name already exists, please choose a different user name",
        });
      }

      userObject.password = sha256.sha256(userObject.password);
      userObject.password2 = sha256.sha256(userObject.password2);

      await UsersDAO.createUser(req.body);
      return res.json(req.body);
    } catch (e) {
      console.log(`Error in UsersController.Register ${e}`);
      return res.status(500).json({
        success: false,
        message: "Unknown error",
      });
    }
  }

  static async Login(req, res) {
    try {
      const validRequest = LoginValidation(req.body);
      if (!validRequest) {
        return res.status(400).json({
          success: false,
          message: "Wrong user name or password",
        });
      }

      const user = await UsersDAO.getUserByUsername(req.body.username);

      if (!user || user.password != sha256(req.body.password)) {
        return res.status(400).json({
          success: false,
          message: "Wrong username or password",
        });
      }

      const token = jwt.sign(
        {
          user_id: user._id,
          username: user.username,
        },
        tokenPass
      );

      if (!req.cookies.token) {
        res.cookie('token', token, { maxAge: 1000000 })
        console.log('cookie created')

    }

      // console.log(token)

      return res.json({
        token: token,
      });
    } catch (e) {
      console.log(`Error in UsersController.Login ${e}`);
      return res.status(500).json({
        success: false,
        message: "Unknown error",
      });
    }
  }

  static async UserById(req, res) {
    try {
      const foundUser = await UsersDAO.getUserById(req.params);
      console.log(foundUser);
      return res.send(foundUser);
    } catch (error) {
      console.log(error);
    }
  }

  static async GetAllUsers(req, res) {
    try {
      const allUsers = await UsersDAO.showAllUsers(req);
      return res.send(allUsers);
    } catch (error) {
      console.log(error);
    }
  }

  static async EditUser(req, res) {
    try {
      const editUser = await UsersDAO.editUser(req);
      return res.send(editUser);
    } catch (error) {
      console.log(error);
    }
  }
};
