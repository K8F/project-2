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
    //check if user already exists in our db

    db.Player.findOne({where: {googleID:profile.id}}).then((currentUser) => {
        if(currentUser){
            //already have player
            console.log("player is", currentUser);
        } else{
            // if not, create player in our db
            db.Player.create({
                googleid: profile.id,
                name: profile.displayName,
                intelligence: 5, //Change to random or however combat wasdlaksjd;askd
                hitpoints: 100 //change later
            }).then((newUser) => {
                console.log("New user Created: " + newUser);
            });
        }
    });


    

})
)