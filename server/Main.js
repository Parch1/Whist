// cookie-parser
// body-parser
// ejs

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const helmet = require('helmet');

app.set('view engine', 'ejs');
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  expressSession({
    name: 'session',
    secret: Math.random().toString(36),
    saveUninitialized: true,
    resave: true
  })
);

app.use('/auth/social/google', require('./Routes/Auth/GoogleLogin'));

app.all('*', function(req, res) {
  res.status(404).json({
    status: 404,
    error: 'not_found'
  });
});

app.listen(80);
