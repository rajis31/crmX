const Notes = require("../models/Notes");

exports.getAllNotes = async (req, res, next) => {
  try{
      let NTS = new Notes();
      let [notes,_] = await NTS.findAll("raji");
      return res.status(200).json(notes);
  } catch(err){
    console.log(err);
    next(err);
  }
}

exports.deleteNote = async (req, res, next) => {
  try{
      let NTS = new Notes();
      let [result,_] = await NTS.delete(req.body.id);
      return res.status(200).json(result);
  } catch(err){
    console.log(err);
    next(err);
  }
}
