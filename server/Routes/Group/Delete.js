const express = require('express');
const Router = express.Router();

Router.delete('/', async function(req, res) {
  let groupId = req.body.id || '-1';
  let existsGroup = await DB.query(`SELECT ownerId, id FROM groups WHERE id=${groupId}`);
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
  if (existsGroup[0].ownerId != req.user.id) {
    return res.status(403).json({
      error: 'groupNoOwner'
    });
  }
  await DB.query(`DELETE FROM groups WHERE id=${groupId}`);
  await DB.query(`DELETE FROM group_membership WHERE groupId=${groupId}`);
  res.json({
    deleted: groupId
  });
});

Router.all('/', function(req, res) {
  res.json({
    error: 'methodNotAllowed'
  });
});

module.exports = Router;
