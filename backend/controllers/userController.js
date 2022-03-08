const Users = require("../models/Users");

exports.loginUser = async (req, res, next) => {
  try{
      let user = new Users();
      let username = req.body.username;
      let password = req.body.password;

      let [result,_] = await user.login_user(username, password);
      return res.status(200).json(result);
  } catch(err){
    console.log("Something went wrong with user query.");
    next(err);
  }
}
