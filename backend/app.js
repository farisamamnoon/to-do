const con = require("./db");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const tasksRouter = require("./routes/tasksRouter");
const listRouter = require("./routes/listRouter");

dotenv.config(); //load env variables

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/tasks", tasksRouter);
app.use("/api/lists", listRouter);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

//error handler
app.use((err, req, res, next) => {
  if (err.status === 404) {
    // Page Not Found
    res.status(404).json({
      success: false,
      message: "Page Not Found",
    });
  } else {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
    });
  }
  next();
});

app.listen(process.env.PORT, () => {
  console.log(`Server Listening to ${process.env.PORT}`);
});

module.exports = app;
