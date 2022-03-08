const Users = require("../models/Users");
import "bcrypt";

exports.loginUser = async (req, res, next) => {
  try{
      let user    = new Users();
      let username = req.body.username;
      let password = req.body.password;

      let [result,_] = await user.findUser(username);
      return result?.data?.length > 0 ? res.status(200).json({"msg":"User Found", "found":true}) : 
                                        res.status(404).send("User not Found");
  } catch(err){
    console.log("Something went wrong with user query.");
    next(err);
  }
}
