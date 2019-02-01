const express = require("express");
const router = express.Router();

// router.use('/users', require('./users')); example for requireing all the route files and exporting them together

router.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

module.exports = router;
