const Users = require("../models/Users");


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

exports.registerUser = async (req, res, next) => {
  try{
      let user         = new Users();
      let username     = req.body.username;
      let password     = req.body.password;
      let email        = req.body.email;
      let date_created = new Date().toJSON().slice(0,10).replace(/-/g,'-');
      let [result,_] = await user.insert_data(username, password, date_created,email);
      
      return res.status(200).json(result);
      
  } catch(err){
    console.log("Something went wrong with user query.");
    next(err);
  }
}

exports.updateUser = async (req,res,next) => {
  try{
    return res.status(200).json({file:"Successfully Uploaded Image"});
    
} catch(err){
    next(err);
  }

}