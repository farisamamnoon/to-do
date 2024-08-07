const { createPool } = require("mysql2/promise");

const pool = createPool({
  host: process.env.HOST,
  // user: process.env.USR || "root",
  user: "root",
  // password: process.env.PASS,
  password: "",
  // database: process.env.DATABASE,
  database: "todo",
  multipleStatements: true,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 5,
});

module.exports = pool;
