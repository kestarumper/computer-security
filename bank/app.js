const createError = require('http-errors');
const express = require('express');
const expressSession = require('express-session')
const bodyParser = require('body-parser')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const db = require('./database')
const helmet = require('helmet')

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new Strategy(
  async function (email, password, cb) {
    // console.log(email, password)
    try {
      const result = await db.validateUser(email, password)
        .then((user) => {
          if (!user) { return cb(null, false); }
          return cb(null, user);
        })
    } catch (err) {
      console.error(err)
      return cb(err)
    }
}));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(async function (id, cb) {
  const result = await db.findUserById(id)
    .then((user) => {
      return cb(null, user)
    })
    .catch((err) => {
      return cb(err, null)
    });
  return result;
});

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');
const loginRouter = require('./routes/login');
const apiRouter = require('./routes/api/api');
const registerRouter = require('./routes/register');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ name: 'pierogizfarszem', secret: 'miernik geigera', resave: false, saveUninitialized: false }));
app.use(helmet())
 
// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
