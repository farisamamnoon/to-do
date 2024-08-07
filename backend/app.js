const con = require("./db");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const tasksRouter = require("./routes/tasksRouter");

dotenv.config(); //load env variables

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", tasksRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

app.listen(process.env.PORT, () => {
  console.log(`Server Listening to ${process.env.PORT}`);
});

module.exports = app;
