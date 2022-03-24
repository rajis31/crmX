const Notes = require("../models/Notes");
let json2csv = require('json2csv').parse;

exports.getAllNotes = async (req, res, next) => {
  try{
      let notes     = new Notes();
      let [result,_] = await notes.findAll("raji");
      return res.status(200).json(result);
  } catch(err){
    console.log(err);
    next(err);
  }
}


exports.addNote = async (req, res, next) => {
  try{
      let notes        = new Notes();
      let title        = req.body.title; 
      let body         = req.body.body; 
      let date_changed = new Date().toJSON().slice(0,10).replace(/-/g,'-');
      let [result,_] = await notes.insert_data("raji",title,body,date_changed);
      return res.status(200).json(result);
  } catch(err){
    console.log(err);
    next(err);
  }
}

exports.deleteNote = async (req, res, next) => {
  try{
      let notes = new Notes();
      let [result,_] = await notes.delete(req.body.id);
      return res.status(200).json(result);
  } catch(err){
    console.log(err);
    next(err);
  }
}

exports.generateNotesCsv = async (req, res, next) => {
  try{
      let notes = new Notes();
      console.log(req);
      let username = req.body.username;
      let [result,_] = await notes.findAll("raji");

      let fields     = ["id","title","body","date_created"];
      let fieldNames = ["ID","Title","Body","Date Created"];
      let csv = json2csv(result,fields);

      res.attachment('filename.csv');
      return res.status(200).send(csv); 
  } catch(err){
    console.log(err);
    next(err);
  }
}
