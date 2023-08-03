const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "pgadmin",
  host: "localhost",
  port: "5432",
  database: "ilaj_open_billing_db",
});

module.exports = pool;