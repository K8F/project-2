require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var authRoutes=require('./routes/authRoutes');
var profileRoutes=require('./routes/profileRoutes');
var passportSetup= require("./config/passportSetup");
var db = require("./models");
//var keys=require("./config/keys")
var cookieSession = require("cookie-session");
var passport = require("passport");

var app = express();
//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//ar session = require('express-session');
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use('/auth', authRoutes);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: true}))//session secret
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: process.env.SESSION_COOKIE

}));


// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

// require("/auth","./routes/auth-routes")(app);
//require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
//require ('./routes/authRoutes')(app);


// require("./routes/auth-routes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}




// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;

