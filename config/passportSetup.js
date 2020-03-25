var passport = require('passport');
var GoogleStrategy= require('passport-google-oauth20');
var keys = require("./keys");
var db = require("../models");


var Player = require("../models/player");

passport.serializeUser((user,done) => {
    done(null, user.id);
});

passport.deserializeUser((id,done) => {
    
    db.Player.findByID(id).then((user) => {
        done(null,user);
    });
});

passport.use(new GoogleStrategy({
    //options for the google strategy
    callbackURL:"/auth/google/redirect",
    clientID: keys.google.clientID,
    clientSecret:keys.google.clientSecret
}, (accessToken, refreshToken, profile, done)=>{
    //check if user already exists in our db

    db.Player.findOne({where: {googleID:profile.id}}).then((currentPlayer) => {
        if(currentPlayer){
            //already have player
            console.log("player is", currentPlayer);
            done(null, currentPlayer)
        } else{
            // if not, create player in our db
            db.Player.create({
                googleid: profile.id,
                name: profile.displayName,
                intelligence: 5, //Change to random or however combat wasdlaksjd;askd
                hitpoints: 100 //change later
            }).then((newPlayer) => {
                console.log("New user Created: " + newPlayer);
                done(null, newPlayer);
            });
        }
    });


    

})
)