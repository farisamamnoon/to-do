const db = require("./db");

const sql = `CREATE TABLE IF NOT EXISTS lists (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(20) NOT NULL,
  description VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  target_date DATETIME NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  list INT,
  FOREIGN KEY (list) REFERENCES lists(id)
);
  
CREATE TABLE IF NOT EXISTS sub_tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(20) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  task_id INT,
  FOREIGN KEY (task_id) REFERENCES tasks(id)
);
    
CREATE TABLE IF NOT EXISTS notes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(20) NOT NULL,
  description VARCHAR(100) NOT NULL
);
`;

async function initDb() {
  try {
    const result = await db.query(sql);
    db.end();
  } catch (err) {
    console.log(err);
  }
}

initDb();
