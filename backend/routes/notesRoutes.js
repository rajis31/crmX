const express = require("express");
const NotesControllers = require("../controllers/NotesController"); 
const router  = express.Router();

// Notes Routes  
router.route("/:session_id")
      .get(NotesControllers.getAllNotes);

router.route("/report/:session_id")
      .get(NotesControllers.generateNotesCsv);
      
router.route("/add")
      .post(NotesControllers.addNote);

router.route("/delete")
      .post(NotesControllers.deleteNote);


module.exports = router; 
