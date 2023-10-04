const {
  signup,
  existingUser,
  checkEmailExistence,
  loginUser
} = require("../service/users.service");

class UserController {
  //signup
  async userSignup(req, res) {
    const email = req.body.email;
    const existingUser = await checkEmailExistence(email);
    if (existingUser) {
      return res.status(201).json({ message: "Email already registered" });
    }

    const user = await signup(req, res)
    try {
      res.json(user)
    } catch (error) {
      console.log(error);
    }
  }

  async userLogin(req, res) {
    loginUser(req, res)
  }

}

module.exports = new UserController();