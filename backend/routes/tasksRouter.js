const express = require("express");
const router = express.Router();
const db = require("../db");

const getTasksForToday = require("../controller/taskController");
const addTask = require("../controller/taskController");

router.post("/", addTask);
router.get("/today", getTasksForToday);

module.exports = router;
