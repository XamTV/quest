const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const categoriesRouter = require("./categories/router");

router.use("/categories", categoriesRouter);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const programsRouter = require("./programs/router");

router.use("/programs", programsRouter);

/* ************************************************************************* */

module.exports = router;
