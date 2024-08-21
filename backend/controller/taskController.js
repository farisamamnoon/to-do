const db = require("../db");

const getTasksForToday = (req, res) => {
  try {
    const date = new Date();
    console.log(date.toString());
    res.end();
  } catch (err) {
    console.log(err);
  }
};

const addTask = async (req, res) => {
  try {
    console.log(req.body);
    const { title, description, target_date, list, subtasks } = req.body;
    const sql = `INSERT INTO tasks (title, description, target_date, list) VALUES (?, ?, ?, ?)`;
    const result = await db.query(sql, [title, description, target_date, list]);
    console.log(result);
    return res.status(200).json({
      success: true,
      message: "Task created",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Internal Server Error",
      message: err,
    });
  }
};

module.exports = {
  addTask,
  getTasksForToday,
};
