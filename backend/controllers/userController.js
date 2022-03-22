const Users = require("../models/Users");
const Crypto = require("crypto");

exports.loginUser = async (req, res, next) => {
  try {
    let user = new Users();
    session = req.session;
    let username = req.body.username;
    let password = req.body.password;

    let authorize = await user.authorize(username, password);
    if (authorize) {
      let session_id = crypto.randomBytes(24).toString('base64');
      user.updateSessionId(username, session_id);
      return res.status(200).json({ "msg": "User Found", "found": true, "session_id": session_id });

    } else {
      return res.status(404).send("User not Found");
    }

  } catch (err) {
    console.log("Something went wrong with user query.");
    next(err);
  }
}

exports.registerUser = async (req, res, next) => {
  try {
    let user = new Users();
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    console.log(username);
    let date_created = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
    let [result, _] = await user.insert_data(username, password, date_created, email);

    return res.status(200).json(result);

  } catch (err) {
    console.log("Something went wrong with user query.");
    next(err);
  }
}

exports.updateUser = async (req, res, next) => {
  try {
    let user = new Users();
    let user_id = 1;
    let updated_username = req.body.username;
    let update_img_path = "public/images" + user_id + ".jpg";

    user.updateUser(updated_username, update_img_path, user_id);
    return res.status(200).json({ file: "Successfully updated user" });

  } catch (err) {
    next(err);
  }

}
