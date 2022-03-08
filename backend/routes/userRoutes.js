const express = require("express");
const UsersControllers = require("../controllers/usersController"); 
const router  = express.Router();


// User Routes  
router.route("/login")
      .get(UsersControllers);
