const express = require('express');
const Router = express.Router();

const bcrypt = require('bcrypt');

Router.post('/', async function(req, res) {
  if (!req.body.password || !req.body.username || !req.body.email) {
    return res.json({
      error: 'notEnoughArguments',
      body: req.body
    });
  }
  let userExists =
    (await DB.query(
      `SELECT id FROM accounts WHERE email='${req.body.email}' OR name='${req.body.username}'`
    )).length > 0;
  let userId = Math.floor(Math.random() * 100000);
  let passwd = bcrypt.hashSync(req.body.password, 10);
  let token = jwt.sign({ id: userId }, Secret);
  if (userExists) {
    return res.json({
      error: 'userExists'
    });
  }
  await DB.query(
    `INSERT INTO accounts (id, name, email, password) VALUES (${userId}, '${req.body.username}', '${
      req.body.email
    }', '${passwd}')`
  );
  res.json({
    token: token
  });
});

Router.all('/', function(req, res) {
  res.json({
    error: 'methodNotAllowed'
  });
});

module.exports = Router;
