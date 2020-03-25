const router = require("express").Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

// auth login
router.get("/login", (req,res) => {
    // handle with passport
    res.render("login");
});

// auth logout
router.get("/logout", (req,res) => {
    // handle with passport
    res.send("logging out")
});

// auth with google
router.get("/google", passport.authenticate("google", {
    scope: ["profile"] //This is where the requested google authentication information goes in an array
}));

// Callback route for google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
    res.send("You reached the callback URI");
})


module.exports = router;