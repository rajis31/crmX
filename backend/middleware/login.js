const User = require("../models/Users");

const createLoginSession  = async (req,res,next) => {
    let user       = new User();
    let session_id = req.body?.session_id;
    let [user_found,_] = await user.findUser(req.body?.username);

    if(session_id === undefined || user_found.session_id === undefined ){
        res.status(404).send("Cannot Log you in");
    }
    else if(user_found.session_id !== session_id){
        res.status(404).send("Cannot Log you in");
    } else {
        res.status(200).send("Able to log you in");
    }
}

module.exports = createLoginSession;