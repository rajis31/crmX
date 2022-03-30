const express         = require("express");
const UserControllers = require("../controllers/userController");
const router          = express.Router();
const multer          = require('multer');
const path            = require('path');
const Users            = require("../models/Users");

let img_path = path.join(__dirname,"../../frontend/public/images");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, img_path);
  },
  filename: async function (req, file, cb) {
    let session_id    = req.body.session_id;
    const user        = new Users();
    let [result,_]    = await user.identify_user(session_id);
    let username      = result[0]?.username; 
    cb(null, file.fieldname + '-' + username +".jpg");
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
router.route("/check_session_id")
  .post(UserControllers.checkSessionID);
router.route("/check_username")
  .post(UserControllers.checkUsername);
router.route("/forgot_password")
  .post(UserControllers.forgotPassword);
router.route("/retrieve_image_path")
  .post(UserControllers.retrieveImagePath);
router.route("/logout")
  .post(UserControllers.logout);

module.exports = router; 
