const express = require('express');
const Router = express.Router();

Router.put('/', async function(req, res) {
  let groupId = Math.floor(Math.random() * 100000);
  await DB.query(
    `INSERT INTO groups (name, id, ownerId) VALUES ('${req.body.name}', ${groupId}, ${req.user.id})`
  );
  await DB.query(
    `INSERT INTO group_membership (user, groupId) VALUES (${req.user.id}, ${groupId})`
  );
  res.json({
    groupId: groupId
  });
});

Router.all('/', function(req, res) {
  res.json({
    error: 'methodNotAllowed'
  });
});

module.exports = Router;
