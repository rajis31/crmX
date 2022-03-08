require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

const express = require("express");
const app     = express();
const cors    = require("cors");

// Cross Origin 
app.use(cors());

// Middleware
app.use(express.json()); // parse json bodies in the request object

// Routes
app.use("/user", require("./routes/userRoutes"));
app.use("/notes", require("./routes/notesRoutes"));

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went rely wrong",
  });
});

// Listen on pc port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT http://localhost:${PORT}`));
