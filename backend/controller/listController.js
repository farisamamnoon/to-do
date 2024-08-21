const db = require("../db");

async function addList(req, res) {
  try {
    const { title } = req.body;
    const sql = "INSERT INTO lists(title) VALUES (?)";
    await db.query(sql, [title]);
    return res.status(200).json({
      success: true,
      message: "List created successfully",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Internal Sever Error",
    });
  }
}

async function getLists(req, res) {
  try {
    const sql = "SELECT * FROM lists";
    const [result] = await db.query(sql);
    return res.status(200).json({
      success: true,
      message: "Lists fetched successfully",
      data: result
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Internal Sever Error",
    });
  }
}

module.exports = {
  addList,
  getLists,
};
