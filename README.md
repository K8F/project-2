# Harry Potter RPG

## About this Project

The Harry Potter RPG is a combat game using data from the Potter API. This is a full-stack application. 

The front-end was built using handlebars templates and JQuery.

The backend was built with an express server, and we use Sequelize as an ORM for our MySQL database. We all use Passport.js with Google OAuth as an authentication method for our users.

## How it Works

This game uses a combination of conditional statements and random chance variables (i.e. Math.floor(Math.random) to create a battle between a Death Eater and a player. An opponent will be randonly chosen from an array that is built using an API call to the Potter API for the full list of death eaters. 

Currently, each opponent's HP is more or less random, and their Intelligence, like the players, is 5. Players' HP starts at 150. 

To retrieve player information, we pulled the user information from Passport.js, stored in MySQL database, into the player's local storage. 

## Future Improvements

Currently, this game only realizes combat without any way for the character to level up. We would like to add expereience points and options for leveling up.

We also want to create a dashboard, and an opportunity for multiple character creation. With that, we will use the Potter API's sorting hat function to randomly place a character into a house, and we will rework the HP and Intelligence fields so they are randomly selected instead of making them the same for all charaters as they are now. 

Finally, we need to understand what data should be persistant and what can continue being stored in local storage or in a cookie. Any data that needs to be persistant should be pushed back to the database at the end of a game. With this, we can better support levels functionality.

## Contributors

Kate Foust, Matt Harris, Jonathan Doctolero, Logan Moss
