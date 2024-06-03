const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// Import program-related actions
const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/programActions");

const validateProgram = require("../../../services/validateProgram");
// Route to get a list of programs
router.get("/", browse);

// Route to get a specific program by ID
router.get("/:id", read);

// Route to edit an existing program
router.put("/:id", validateProgram, edit);

// Route to add a new program
router.post("/", validateProgram, add);

// Route to edit an existing program
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
