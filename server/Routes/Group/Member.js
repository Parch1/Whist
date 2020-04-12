const express = require('express');
const Router = express.Router();

Router.put('/', async function(req, res) {
  let groupId = req.body.id || '-1';
  let userId = req.body.userid;
  let existsGroup = await DB.query(`SELECT ownerId, id FROM groups WHERE id=${groupId}`);
  let existsUser = await DB.query(`SELECT id FROM accounts WHERE id=${userId}`);
  let existsMembers = await DB.query(`SELECT user FROM group_membership WHERE user=${userId}`);
  if (existsGroup.length === 0) {
    return res.status(404).json({
      error: 'groupNotFound'
    });
  }
  if (existsGroup[0].ownerId != req.user.id) {
    return res.status(403).json({
      error: 'groupNoOwner'
    });
  }
  if (existsUser.length == 0) {
    return res.json({
      error: 'userNotFound'
    });
  }
  if (existsMembers.length != 0) {
    return res.json({
      error: 'userInGroup'
    });
  }
  await DB.query(`INSERT INTO group_membership (user, groupId) VALUES (${userId}, ${groupId})`);
  res.json({
    added: userId
  });
});

Router.all('/', function(req, res) {
  res.json({
    error: 'method_not_allowed'
  });
});

module.exports = Router;
