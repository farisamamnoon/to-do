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

const addTask = (req, res) => {
  try {
    const { title, description, target_date, list } = req.body;
    const sql = `INSERT INTO tasks (title, description, target_date, list) VALUES (?, ?, ?, ?)`;
    const result = db.query(sql, [title, description, target_date, list]);
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

module.exports = getTasksForToday;
module.exports = addTask;
