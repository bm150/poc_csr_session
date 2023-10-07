var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var cors = require('cors');
var filestore = require('session-file-store')(session);
const maxAge = 1000 * 600 * 5;

const sessionObj = {
  secret: 'kong',
  resave: false,
  saveUninitialized: false,
  store : new filestore(),
  cookie: {
    maxAge,
    'httpOnly' : true,
    'sameSite' : 'None',
    'secure' : true
    // domain : 'localhost:3001'
  },
};
var app = express();
var corsOptions = {
  origin: 'http://127.0.0.1:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
app.set('trust proxy', 1) // trust first proxy
app.use(session(sessionObj))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api',apiRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
