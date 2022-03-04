const express = require("express");
const NotesControllers = require("../controllers/NotesController"); 
const router  = express.Router();

// Notes Routes  
router.route("/")
      .get(NotesControllers.getAllNotes);

router.route("/delete")
      .post(NotesControllers.deleteNote);

module.exports = router; 
