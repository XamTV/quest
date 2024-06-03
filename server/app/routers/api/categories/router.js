const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import category-related actions
const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/categoryActions");

const validateCategory = require("../../../services/validateCategory");

// Route to get a list of categories
router.get("/", browse);

// Route to get a specific category by ID
router.get("/:id", read);

// Route to edit an existing category
router.put("/:id", validateCategory, edit);

// Route to add a new category
router.post("/", validateCategory, add);

// Route to edit an existing category
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
