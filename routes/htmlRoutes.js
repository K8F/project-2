var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Player.findAll({}).then(function(hp_rpg) {
      res.render("index", {
        msg: "Welcome!",
        examples: hp_rpg
      });
    });
  });
  app.get("/dashboard", function(req, res) {
    db.Player.findAll({}).then(function(hp_rpg) {
      res.render("dashboard", {
        examples: hp_rpg
      });
    });
  });

  app.get("/battle", function(req, res) {
    db.Player.findAll({}).then(function(hp_rpg) {
      res.render("battle", {
        examples: hp_rpg
      });
    });
  });

  // Load example page and pass in an example by id


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {  
    res.render("404");
  });
};