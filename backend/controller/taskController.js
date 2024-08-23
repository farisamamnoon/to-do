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
    const { title, description, target_date, list, subtasks } = req.body;

    const sql = `INSERT INTO tasks (title, description, target_date, list) VALUES (?, ?, ?, ?)`;
    const [result] = await db.query(sql, [
      title,
      description,
      target_date,
      list,
    ]);

    const taskId = result.insertId;
    const sql2 = `INSERT INTO sub_tasks(title, completed, task_id) VALUES (?, ?, ?)`;
    await Promise.all(
      subtasks.map(({ title, done }) => db.query(sql2, [title, done, taskId]))
    );

    return res.status(200).json({
      success: true,
      message: "Task created",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Internal Server Error",
      message: err.message,
    });
  }
};

module.exports = {
  addTask,
  getTasksForToday,
};
