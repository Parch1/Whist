const express = require('express');
const Router = express.Router();

Router.get('/', function(req, res) {
  res.json(req.user);
});

Router.all('/', function(req, res) {
  res.json({
    error: 'methodNotAllowed'
  });
});

module.exports = Router;
