const express = require("express");
const UserControllers = require("../controllers/userController");
const router = express.Router();
const multer = require('multer');
const path = require('path');


// let img_path = path.join("./");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./")
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
})

const upload = multer({ storage: storage })

// User Routes  
router.route("/login")
  .post(UserControllers.loginUser);
router.route("/register")
  .post(UserControllers.registerUser);
router.route("/update")
  .post(upload.single("image"), UserControllers.updateUser);

module.exports = router; 
