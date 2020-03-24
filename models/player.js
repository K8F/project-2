module.exports = function(sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
      googleid: DataTypes.STRING,
      name: DataTypes.STRING,
      //photo:DataTypes.STRING,
      intelligence: DataTypes.INTEGER,
      hitpoints: DataTypes.INTEGER,
      //defense: DataTypes.INTEGER
      //experience: DataTypes.INTEGER,
      //agility: DataTypes.INTEGER,
      //house: DataTypes.STRING,
      //currentlocation:
    });
    return Player;
  };
  