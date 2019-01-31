const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
module.exports = app;

// logging middleware
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "public")));

// request parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// directing requests to express routes
app.use("/api", require("./api"));

// sending 404 to requests for unexisting data
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

const port = process.env.PORT || 4000; // this can be very useful if you deploy to Heroku!
app.listen(port, function() {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});

// always sending same html page / single page app
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

app.use(function(err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
