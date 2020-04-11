const request = require('request');

const express = require('express');
const Router = express.Router();

Router.post('/', function(req, res) {
  request.get(
    {
      uri:
        'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=' +
        encodeURIComponent(req.body.accessToken)
    },
    function(err, resp, body) {
      body = JSON.parse(body);
      res.json({
        status: resp.statusCode,
        error: body.error,
        response: body
      });
    }
  );
});

Router.all('/', function(req, res) {
  res.json({
    status: 405,
    error: 'method_not_allowed'
  });
});

module.exports = Router;
