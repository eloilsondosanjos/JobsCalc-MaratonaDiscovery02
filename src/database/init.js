const Database = require("./config");

const initDb = {
  async init() {
    const db = await Database();

    await db.exec(`CREATE TABLE profile (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    avatar TEXT,
    monthly_budget INT,
    days_per_week INT,
    hours_per_day INT,
    vacation_per_year INT,
    value_hour INT
)`);

    await db.exec(`CREATE TABLE jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    daiyly_hours INT,
    total_hours INT,
    created_at DATETIME
)`);

    await db.run(`INSERT INTO profile (
    name,
    avatar,
    monthly_budget,
    days_per_week,
    hours_per_day,
    vacation_per_year,
    value_hour
  ) VALUES (
    "Eloilson",
    "https://avatars.githubusercontent.com/u/59416393?s=400&u=028ddf3943aa1e534f6f552dc60362d7cfbd72e4&v=4",
    3000,
    5,
    5,
    4,
    75
)`);

    await db.run(`INSERT INTO jobs (
    name,
    daiyly_hours,
    total_hours,
    created_at
  ) VALUES (
    "Pizzaria Guloso",
    4,
    47,
    1617514376018
)`);

    await db.run(`INSERT INTO jobs(
    name,
    daiyly_hours,
    total_hours,
    created_at
  ) VALUES (
    "OneTwo Project",
    3,
    44,
    1617514376018
  )`);

    await db.close();
  },
};

initDb.init();
