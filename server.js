// Dependencies:

var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var passport = require('passport');
var flash = require('connect-flash');
var sequelize = require('sequelize');

// Sets up the Express App:

var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing:

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Setting app

app.set('view engine', 'ejs');

// Static directory

app.use(express.static("app/public"));

// Routes

require("./app/routes/api-routes.js")(app, passport);

// Starts the server to begin listening

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});