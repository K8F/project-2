var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/users", function(req, res) {
    db.Player.findAll({}).then(function(hp_rpg) {
      res.json(hp_rpg);
    });
  });

  // Create a new example
  app.post("/api/users", function(req, res) {
    db.Player.create(req.body).then(function(hp_rpg) {
      res.json(hp_rpg);
    });
  });

  // Delete an example by id
  app.delete("/api/user/:id", function(req, res) {
    db.Player.destroy({ where: { id: req.params.id } }).then(function(hp_rpg) {
      res.json(hp_rpg);
    });
  });
};
