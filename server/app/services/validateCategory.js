const validateCategory = (req, res, next) => {
  const { name } = req.body;

  const errors = [];

  if (name == null) {
    errors.push({ field: "name", message: "The field is required" });
  } else if (name.length > 255) {
    errors.push({
      field: "name",
      message: "should contain less than 255 characters",
    });
  }

  if (errors.length === 0) {
    next();
  } else {
    res.status(400).json({ validateErrors: errors });
  }
};

module.exports = validateCategory;
