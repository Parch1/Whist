var Database = require('./database/Require');
var DatabaseConnection = null;
Database.then(_ => {
  _.query('use Whist');
  DatabaseConnection = _;
  global.DB = _;
});

global.Secret =
  'xoZbblDTj8gt68z264lm8sm4f9H0pnQBbgi6z8h6sdlm3hac5gensg97izZuCCcRd4gkVfh2O4ksndcwAej4HdnwzG9gXDXRGxlb2KM3mi4y8833x4co0k';
global.jwt = require('jsonwebtoken');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

app.set('view engine', 'ejs');
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('*', function(req, res, next) {
  if (DatabaseConnection == null) {
    return res.status(500).json({
      error: 'database'
    });
  }
  next();
});

app.use('/auth/login', require('./Routes/Auth/Login'));
app.use('/auth/register', require('./Routes/Auth/Register'));

app.use('*', async function(req, res, next) {
  if (req.headers.authorization) {
    let token = req.headers.authorization.replace('Bearer ', '');
    let userId = jwt.verify(token, Secret);

    let authUser = await DB.query(`SELECT name, email FROM accounts WHERE id=${userId.id}`);
    if (authUser.length == 0) {
      return res.status(403).json({
        error: 'wrongAccessToken'
      });
    }

    req.user = authUser[0];
    req.user.id = userId.id;
    next();
  } else {
    return res.status(403).json({
      error: 'noAccessToken'
    });
  }
});

app.use('/auth/wall', require('./Routes/Auth/Wall'));

app.use('/group/info', require('./Routes/Group/Info'));
app.use('/group/create', require('./Routes/Group/Create'));
app.use('/group/delete', require('./Routes/Group/Delete'));
app.use('/group/member', require('./Routes/Group/Member'));

app.use('/workout', require('./Routes/Workout/List'));

app.all('*', function(req, res) {
  res.status(404).json({
    error: 'not_found'
  });
});

app.listen(80);
