const mariadb = require('mariadb');
var conn_ = null;
const pool = mariadb.createPool({
  host: '172.30.250.27',
  user: 'Whist',
  password: '$qQ0DD$EnZ3CQ%Wr1UcNiiEw3I',
  connectionLimit: 5
});

let _re = pool.getConnection();

module.exports = _re;
