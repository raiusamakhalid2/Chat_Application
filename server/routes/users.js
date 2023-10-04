const express = require('express');

const router = express.Router();
const UserController =require('../controller/users.controller')
/* GET users listing. */

router.post('/signup',UserController.userSignup);
router.post('/login',UserController.userLogin);

// Add the signup route

module.exports = router;