const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const morgan = require('morgan');

const mongoose = require('mongoose');
const passport = require('passport');

/***********************************************************************
* MODELS                                                               *
***********************************************************************/
require('./models/Survey');
require('./models/User');

/***********************************************************************
* SERVICES                                                             *
***********************************************************************/
require('./services/passport');

/***********************************************************************
* SERVER SETUP                                                         *
***********************************************************************/
const keys = require('./config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, function(error) {
  if (error) {
    console.error(error);
  }

  console.log('Connected to MongoDB Instance.');
});

const app = express();
const server = new http.Server(app);

/***********************************************************************
* MIDDLEWARE                                                           *
***********************************************************************/
// HTTP Logger -> 'dev' -> Concise output colored by response status for development use.
app.use(morgan('dev'));
// HTTP Body Parser
app.use(bodyParser.json());
// // may not need this one
// app.use(bodyParser.urlencoded({ extended: true }));
// Session Cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
// Passport
app.use(passport.initialize());
app.use(passport.session());

/***********************************************************************
* ROUTE HANDLERS                                                       *
***********************************************************************/
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

/***********************************************************************
* SERVER STARTUP                                                       *
***********************************************************************/
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
function startServer() {
  server.listen(PORT, () => {
    console.log(`Application launched on port: ${PORT}`);
  });
}

startServer();
