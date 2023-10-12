const express = require('express');
const router = express.Router();
const LoginsignupController =require('../controller/loginsignup.controller')
/* GET users listing. */

router.post('/user/signup',LoginsignupController.userSignup);
router.post('/user/login',LoginsignupController.userLogin);

// Add the signup route

module.exports = router;