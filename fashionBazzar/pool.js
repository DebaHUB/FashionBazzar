const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'dbpass',
  database: 'fashionbazzar',
});

module.exports = pool;
