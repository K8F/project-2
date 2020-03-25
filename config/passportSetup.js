var passport = require('passport');
var GoogleStrategy= require('passport-google-oauth20');
var keys = require("./keys");
var db = require("../models");

const Player = require("../models/player");

passport.use(new GoogleStrategy({
    //options for the google strategy
    callbackURL:"/auth/google/redirect",
    clientID: keys.google.clientID,
    clientSecret:keys.google.clientSecret
}, (accessToken, refreshToken, profile, done)=>{
    //passport callback function
    console.log('passport callback function fired');

    // console.log(profile);

    db.Player.create({
        googleid: profile.id,
        name: profile.displayName,
        intelligence: 5, //Change to random or however combat wasdlaksjd;askd
        hitpoints: 100 //change later
    }).then((newUser) => {
        console.log("New user Created: " + newUser);
    });

})
)