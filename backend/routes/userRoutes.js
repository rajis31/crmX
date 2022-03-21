const express = require("express");
const UserControllers = require("../controllers/userController");
const router = express.Router();
const multer = require('multer');
const path = require('path');


let img_path = path.join(__dirname,"../../frontend/public/images");
console.log(img_path);

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, img_path)
  },
  filename: function (req, file, cb) {
    console.log(req.body);
    cb(null, file.fieldname + '-' + req.body.username);
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
