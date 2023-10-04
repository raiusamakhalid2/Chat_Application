const bcrypt = require("bcrypt");
const UserModel = require("../models/AdminModel");
const jwt = require("jsonwebtoken");
const { application } = require("express");

class Users {

  async checkEmailExistence(email) {
    try {
      const existingUser = await UserModel.findOne({ email });
      return !!existingUser;
    } catch (error) {
      throw error;
    }
  }

  async signup(req, res) {
    try {
      const newUser = await UserModel.create(req.body)
      return newUser
    } catch (error) {
      console.log(error)
    }
  }
  
  async loginUser(req, res) {

    try {
      const { email, password } = req.body;

      const user = await UserModel.findOne({ email: email });

      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      // if (password === user.password) {
      if (passwordMatch) {
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '3d' });
        return res.status(200).json({ message: 'Valid user', token });
      } else {
        res.status(401).json({ error: 'Incorrect password' });
      }
    } catch (error) {
      return error;
    }

  }


}

module.exports = new Users();