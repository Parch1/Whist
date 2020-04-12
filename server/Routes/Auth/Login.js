const express = require('express');
const Router = express.Router();

const bcrypt = require('bcrypt');

Router.post('/', async function(req, res) {
  let user = await DB.query(
    `SELECT * FROM accounts WHERE email='${req.body.username}' OR name='${req.body.username}'`
  );
  if (user.length === 0) {
    return res.json({
      error: 'userNotFound'
    });
  }
  if (bcrypt.compareSync(req.body.password, user[0].password)) {
    let token = jwt.sign({ id: user[0].id }, Secret);
    res.json({
      token: token
    });
  } else {
    res.json({
      error: 'wrongDetails'
    });
  }
});

Router.all('/', function(req, res) {
  res.json({
    error: 'methodNotAllowed'
  });
});

module.exports = Router;
