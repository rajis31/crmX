const Notes = require("../models/Notes");
const Users = require("../models/Users");
let json2csv = require('json2csv').parse;

exports.getAllNotes = async (req, res, next) => {
  try{
      let notes          = new Notes();
      let user           = new Users();

      let session_id     = req.params.session_id;
      let [result,_]     = await user.identify_user(session_id);
      let username       = result[0]?.username;
      [result,_]         = await notes.findAll(username);
      return res.status(200).json(result);
  } catch(err){
    console.log(err);
    next(err);
  }
}


exports.addNote = async (req, res, next) => {
  try{
      let notes          = new Notes();
      let user           = new Users();
      
      let title          = req.body.title; 
      let body           = req.body.body; 
      let session_id     = req.body.session_id;
      let [result,_]     = await user.identify_user(session_id);
      let username       = result[0]?.username;
      
      let date_changed = new Date().toJSON().slice(0,10).replace(/-/g,'-');
      [result,_]       = await notes.insert_data(username,title,body,date_changed);
      return res.status(200).json(result);
  } catch(err){
    console.log(err);
    next(err);
  }
}

exports.deleteNote = async (req, res, next) => {
  try{
      let notes          = new Notes();
      let user           = new Users();

      let session_id     = req.body.session_id;
      let [result,_]     = await user.identify_user(session_id);
      let username       = result[0]?.username;
      [result,_]         = username ? await notes.delete(req.body.id):"";
      return res.status(200).json(result);
  } catch(err){
    console.log(err);
    next(err);
  }
}

exports.generateNotesCsv = async (req, res, next) => {
  try{
      let notes = new Notes();
      let session_id     = req.body.session_id;
      let [result,_]     = await user.identify_user(session_id);
      let username       = result[0]?.username;
      [result,_]         = await notes.findAll(username);

      let fields     = ["id","title","body","date_created"];
      let fieldNames = ["ID","Title","Body","Date Created"];
      let csv = json2csv(result,fields);

      res.attachment('Notes.csv');
      return res.status(200).send(csv); 
  } catch(err){
    console.log(err);
    next(err);
  }
}
