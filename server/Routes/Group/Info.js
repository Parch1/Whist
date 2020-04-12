const express = require('express');
const Router = express.Router();

Router.get('/', async function(req, res) {
  let groupId = req.body.id || '-1';
  let existsGroup = await DB.query(`SELECT id FROM groups WHERE id=${groupId}`);
  if (existsGroup.length === 0) {
    return res.status(404).json({
      error: 'groupNotFound'
    });
  }
  let isMemberOfGroup =
    (await DB.query(
      `SELECT groupId FROM group_membership WHERE user=${req.user.id} AND groupId=${groupId}`
    )).length > 0;
  if (!isMemberOfGroup) {
    return res.status(403).json({
      error: 'groupNoMember'
    });
  }
  res.json(existsGroup[0]);
});

Router.all('/', function(req, res) {
  res.json({
    error: 'methodNotAllowed'
  });
});

module.exports = Router;
