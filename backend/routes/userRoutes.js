const express = require("express");
const UserControllers = require("../controllers/userController"); 
const router  = express.Router();


// User Routes  
router.route("/login")
      .post(UserControllers.loginUser);
router.route("/register")
      .post(UserControllers.registerUser);
router.route("/update")
      .post(UserControllers.updateUser);
      
module.exports = router; 
