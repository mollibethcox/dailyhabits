const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Database Connection
const dbConfig = require('./db.js');
const mongoose = require("mongoose");
mongoose.connect(dbConfig.url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

// Passport Config
const passport = require('passport');
const session = require('express-session');
app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

// Using the flash middleware provided by connect-flash to store messages in session
// and displaying in templates
const flash = require('connect-flash');
app.use(flash());

// Initialize Passport Strategies
const initPassport = require('./passport/init');
initPassport(passport);

// GET ROUTES
const routes = require('./routes/users')(passport);
app.use('/find', routes);

/*app.get("/", function(req, res) {
  res.send("Hello World");
});*/


const habitsRouter = require('./routes/habits');
// const usersRouter = require('./routes/users');

app.use('/habits', habitsRouter);
// app.use('/users', usersRouter);

app.listen(5000, function() {
  console.log("Server started on port 5000");
});
