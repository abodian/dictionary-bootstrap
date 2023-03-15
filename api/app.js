const express = require("express");
const createError = require("http-errors");
const path = require("path");
const logger = require("morgan");
const dictionaryRouter = require("./routes/dictionary");
const thesaurusRouter = require("./routes/thesaurus");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// setup for receiving JSON
app.use(express.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// route setup
app.use("/dictionary", dictionaryRouter);
app.use("/thesaurus", thesaurusRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // respond with details of the error
  res.status(err.status || 500).json({ message: "server error" });
});
