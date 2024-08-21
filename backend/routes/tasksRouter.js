const express = require("express");
const router = express.Router();

const { addTask, getTasksForToday } = require("../controller/taskController");

router.post("/", addTask);
router.get("/today", getTasksForToday);

module.exports = router;
