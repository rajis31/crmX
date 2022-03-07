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


exports.addNote = async (req, res, next) => {
  try{
      let NTS          = new Notes();
      console.log(req.body);
      let title        = req.body.title; 
      let body         = req.body.body; 
      console.log("This is the title: "+title);
      let date_changed = new Date().toJSON().slice(0,10).replace(/-/g,'-');
      let [result,_] = await NTS.insert_data("raji",title,body,date_changed);
      return res.status(200).json(result);
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
