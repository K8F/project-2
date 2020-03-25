
//spell buttons
var $spellOneBtn = $("#spellOne");
var $spellTwoBtn = $("#spellTwo");
var $spellThreeBtn = $("#spellThree");
// var $leftArrow = $("#leftArrow");
var $spellDefendBtn = $("#spellDefend");
var $spellHealBtn = $("#spellHeal");
var $runBtn=("$#run")

//this is where the spells and fighting appear
var $battleEventsDiv = $("#battleEvents") 
var $playerNameDiv= $("#yourName");
var $enemyNameDiv = $("#enemyName");

var heal=2;
var defense=0;
var deathEaterArray=[];

var enemy;


function startGame()
{

enemy = getOpponent(deathEaterArray);  
// window.onload = function() {
  this.$playerNameDiv.text(test.name)
  this.$enemyNameDiv.text(enemy.name);
  $("#yourHP").text(" " + test.hitpoints)
  $("#enemyHP").text(" " + enemy.hitpoints);
  $("#yourDefense").text(" " + defense)
  $("#healingCount").text(" "+ heal);

  

// };
//green button (easy)
$spellOneBtn.on("click", function() {
  Combat.playerAttackEasy();
});

//orange button (medium)
$spellTwoBtn.on("click", function() {
  Combat.playerAttackMedium();
});

//red button (hard)
$spellThreeBtn.on("click", function() {
  Combat.playerAttackHard();

});

$spellDefendBtn.on("click", function(){
  Combat.playerDefend();
});

$spellHealBtn.on("click", function(){
  Combat.playerHeal();
});

// $runBtn.on("click", function(){
//   Combat.playerRun();
// });


};




// $leftArrow.on("click", function() {
//   alert("Go to the room at the left!");
// })

//api calls

var queryURL = "https://www.potterapi.com/v1/";
var key= "$2a$10$9TJcV993TdR154smSIsF5e1Lqac..133PduyWSTXpWEG5tw.SG.1y"

//array that holds spells pulled from hp api
var spellsArray=[];

//spells object
var Spell = function (name, chtype, difficulty, effect) {
    this.name = name;
    this.chtype = chtype;//player or opponent
    this.difficulty=difficulty //how hard it is to cast spell- easy, medium, hard
    this.effect = effect; //i.e. stun(optional), damage, heal, kill (special death eater spell)
    //(future development) this.level = level; //only available for certain levels 
};


//api call for spells

function getSpells(){
    $.ajax(
        {
            url: queryURL + "spells" + "?key=" + key,
            method: "GET"
        }).then(function(response){
            console.log("=================")
            console.log("spells")
            console.log("==================")
            spellsArray.push(new Spell(response[58].spell,"player", "hard", "damage"));
            spellsArray.push( new Spell (response[15].spell, "opponent", "superHard", "instantKill"));
            spellsArray.push( new Spell(response[87].spell, "opponent", "easy", "damage"));
            spellsArray.push(new Spell(response[34].spell, "opponent", "medium", "damage"));
            spellsArray.push(new Spell(response[59].spell, "player", "easy", "damage"));
            spellsArray.push(new Spell(response[136].spell, "opponent", "hard", "damage"));
            spellsArray.push (new Spell(response[51].spell, "player", "medium", "damage"));
            spellsArray.push (new Spell(response[63].spell, "player", "medium", "defense"));
            spellsArray.push (new Spell(response[53].spell, "player", "easyLimited", "heal"));


            //console.log(spellsArray)

            getDeathEaters();


        });




};



//call spell function
getSpells();


var DeathEater = function (id, name, intelligence, hitpoints) {
  this.id=id
  this.name = name;
 
  this.intelligence = intelligence;
  this.hitpoints = hitpoints;
  
  this.printTest = function () {
      console.log("Name: " + this.name);
      console.log("\n-------------\n");

      
  };





};

function getDeathEaters() {
  $.ajax(
      {
          url: queryURL + "characters" + "?key=" + key,
          method: "GET"
      }).then(function (response) {


          console.log("==========================")
          console.log("combat characters (malevolent)")
          //these characters are all death eaters
          console.log("==========================")


          for (var i = 0; i < response.length; i++) {
              if (response[i].deathEater === true) {
                 // deathEaterArray.push({ name: response[i].name, });
                 // use random
                  deathEaterArray.push(new DeathEater(i, response[i].name, 5, 100+i))
              };

                             
          };
          
          console.log(deathEaterArray);
          //console.log(enemy);

          startGame();
      });


  };



  //player object (temporary);
var Player = function (id, name, intelligence, hitpoints, experience, house, location, agility, history) {
  this.id=id;
  this.name = name;
  this.intelligence = intelligence;
  this.hitpoints = hitpoints;
  this.experience = experience;
  this.house = house;
  this.location=location;
  this.agility=agility;
  this.history=[];
};
  
//test player
var test = new Player (1, "kate", 5, 100, 0, 2, "Hufflepuff", 0, 120, []);


//object holding all combat moves
var Combat={
  playerAttackEasy: function(){
      //display spell
      $battleEventsDiv.text("You cast " + spellsArray[4].name + "!");
      
      //calculating hit- total damage == player's intelligence
      var totalDamage=test.intelligence;
      enemy.hitpoints=enemy.hitpoints-totalDamage;
      //update enemy hp
      $("#enemyHP").text(" " + enemy.hitpoints);
      
      //checks if enemy has lost all hitpoints; if yes, player wins
      if (enemy.hitpoints <= 0){
        $("#resultModalBody").text("You Win!");
        $('#myModal').modal('toggle');

        //checks to see if player has any defense built up
      } else if(defense > 0){
          defense--
          $("#yourDefense").text(" " + defense)
        }
          else{

            function doAdelay(){
              setTimeout(function(){Combat.opponentAttack()},2000);
          };

          doAdelay();
          //Combat.opponentAttack();
      }

  }, 

  playerAttackMedium: function(){
      if (spellsArray[6].difficulty==="medium"){
          var x= Math.floor(Math.random()* 2 + 1);
          var totalDamage= test.intelligence * 2;

          console.log(x);
          if (x===1){
              enemy.hitpoints = enemy.hitpoints - totalDamage;
              $battleEventsDiv.text("You cast " + spellsArray[6].name + "!");
              $("#enemyHP").text(" " + enemy.hitpoints);

          }
          else{
            $battleEventsDiv.text("You Missed!")
          }

      };
      if (enemy.hitpoints <= 0){
        $("#resultModalBody").text("You Win!");
        $('#myModal').modal('toggle');

      } else if(defense > 0){
          defense--
          $("#yourDefense").text(" " + defense)
        }
          else{
            function doAdelay(){
              setTimeout(function(){Combat.opponentAttack()},2000);
          };
          doAdelay();
      }

  },

  playerAttackHard: function (){

      if (spellsArray[0].difficulty==="hard"){
          var x= Math.floor(Math.random()* 3 + 1);
          var totalDamage= test.intelligence * 3;
          console.log(x);
          if (x===1){
              enemy.hitpoints = enemy.hitpoints - totalDamage;
              $battleEventsDiv.text("You cast " + spellsArray[0].name + "!"); 

          }
          else{
            $battleEventsDiv.text("You missed!")
          }

      }

      if (enemy.hitpoints <= 0){
        $("#resultModalBody").text("You Win!");
        $('#myModal').modal('toggle');
      } else if(defense > 0){
          defense--
          $("#yourDefense").text(" " + defense)
        }
          else{
            function doAdelay(){
              setTimeout(function(){Combat.opponentAttack()},2000);
          };
          doAdelay();      
        };
  },

  playerDefend: function (){
          var x= Math.floor(Math.random()* 2+ 1);
          console.log(x);
          if (x===1){
              defense=Math.floor(Math.random()*3+1)
              $battleEventsDiv.text("Nice block! Enjoy a few extra rounds:  " + defense);
              $("#yourDefense").text(" " + defense)

          }
          else if (enemy.hitpoints <= 0){
            $("#resultModalBody").text("You Win!");
            $('#myModal').modal('toggle');
          } else{
              $battleEventsDiv.text("Block didn't work. Better luck next time!")
              function doAdelay(){
                setTimeout(function(){Combat.opponentAttack()},2000);
            };
            doAdelay();
          };

      

      

  },

  playerHeal: function (){
      //need to figure out how to make sure player doesn't go over initial hitpoint count
      var healing = Math.floor(Math.random()* 10+ 1);
      console.log(heal);
      if (heal<=0){
        $battleEventsDiv.text("Sorry, you're out of health spells. Cast a spell at your opponent, or try defending yourself to gain a few extra rounds.")
      } else{
        heal--
        $("#healingCount").text(" "+ heal);
        ;
          test.hitpoints+=healing
          $battleEventsDiv.text("You've replinished " + healing + "HP.");
          if (enemy.hitpoints <= 0){
            $("#resultModalBody").append("You Win!");
            $('#myModal').modal('toggle');
          } else if(test.defense > 0){
              test.defense--
              $("#yourDefense").text(" " + defense)
            }
              else{
                function doAdelay(){
                  setTimeout(function(){Combat.opponentAttack()},2000);
              };
              doAdelay();
          }
      }

          
    

      

  }, 

  // playerRun: function(){
  //     var run = Math.floor(Math.random()*2+1);
  //     if(run==1){
  //       $("#resultModalBody").text("You successfully ran away!");
  //       $('#myModal').modal('toggle');
  //     }
  //     else{

  //         Combat.opponentAttack()
  //     }
  // },

  opponentAttack: function(){
      if (Math.floor(Math.random()*50 + 1)==1){
          $battleEventsDiv.text(spellsArray[1].name + "!"); 
          var totalDamage= test.hitpoints
          test.hitpoints=test.hitpoints-totalDamage;
          $("#yourHP").text(" " + test.hitpoints);


      } else if (Math.floor(Math.random()*20 + 1)==1){
          var totalDamage= enemy.intelligence * 3;
              $battleEventsDiv.text(spellsArray[5].name + "!"); 
              console.log("-----------")
              console.log("opponent's round")
              test.hitpoints=test.hitpoints-totalDamage;
              $("#yourHP").text(" " + test.hitpoints);


      } else if (Math.floor(Math.random()*10 + 1)==1){
          $battleEventsDiv.text(spellsArray[3].name + "!"); 
          var totalDamage= enemy.intelligence * 2;
          test.hitpoints=test.hitpoints-totalDamage;
          $("#yourHP").text(" " + test.hitpoints);

      } else if (Math.floor(Math.random()*2 + 1)==1){
          $battleEventsDiv.text(spellsArray[2].name + "!"); 
          var totalDamage= enemy.intelligence;
          test.hitpoints=test.hitpoints-totalDamage;
          $("#yourHP").text(" " + test.hitpoints);

      } else{
        $battleEventsDiv.text("Oppnent Missed!"); 
          $("#yourHP").text(" " + test.hitpoints);

      }

      if (test.hitpoints <=0){

        $("#resultModalBody").append("You Lose!");
        $('#myModal').modal('toggle');
          };        
  },

 

  


};












function  getOpponent(arr) {

     
  //var randomIndex = 
  console.log("---> ",arr)
    return (arr[Math.floor(Math.random() * arr.length)]);
};



  
    





