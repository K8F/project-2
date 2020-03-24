drop database IF EXISTS hprpg;
CREATE DATABASE hp_rpg;
use hp_rpg;
create table Users ( 
UserID INT NOT NULL AUTO_INCREMENT,
UserEmail varchar(255) UNIQUE NOT NULL,
Password VARCHAR(25) NOT NULL,
PRIMARY KEY (UserID, UserEmail)
);