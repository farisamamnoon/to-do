const { createPool } = require("mysql2/promise");

const pool = createPool({
  host: process.env.HOST,
  user: process.env.USR || "root",
  password: "rootroot",
  database: "todo",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 5,
});

module.exports = pool;
