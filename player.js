

var player;
var heal = 2;




var Player = function (id, name, intelligence, hitpoints, experience, house, location, agility, history) {
    this.id=id;
    this.name = name;
    this.intelligence = intelligence;
    this.hitpoints = hitpoints;
    this.experience = experience;
    this.house = house;
    this.location=location;
    this.agility=agility
    this.history=[];
};
    

var test = new Player (1, "kate", 5, 100, 2, "Hufflepuff", 0, 120, []);

console.log(test);
var damage=10;

var Combat={
    playerAttackEasy: function(){
        var totalDamage=test.intelligence;
        console.log(totalDamage)
        if (spellsArray[2].difficulty==="easy"){
        deathEaterArray[0].hitpoints=deathEaterArray[0].hitpoints-totalDamage;
        console.log("hitpoints after attack: " + deathEaterArray[0].hitpoints);
        Combat.opponentAttack();
        }
        

    }, 

    playerAttackMedium: function(){
        if (spellsArray[6].difficulty==="medium"){
            var x= Math.floor(Math.random()* 4 + 1);
            var totalDamage= test.intelligence * 2;

            console.log(x);
            if (x===1){
                deathEaterArray[0].hitpoints = deathEaterArray[0].hitpoints - totalDamage;
                console.log("true")
                console.log("total damage: " + totalDamage)
                console.log("player intelligence:" + test.intelligence);
                console.log("hitpoints after attack: " + (deathEaterArray[0].hitpoints))

            }
            else(console.log("false"))

        }

    },

    playerAttackHard: function (){

        if (spellsArray[0].difficulty==="hard"){
            var x= Math.floor(Math.random()* 10 + 1);
            var totalDamage= test.intelligence * 3;
            console.log(x);
            if (x===1){
                deathEaterArray[0].hitpoints = deathEaterArray[0].hitpoints - totalDamage;
                console.log("true")
                console.log("hitpoints after attack: " + (deathEaterArray[0].hitpoints))

            }
            else(console.log("false"))

        }

    },

    playerDefend: function (){
        if (spellsArray[7].effect==="defense"){
            var x= Math.floor(Math.random()* 2+ 1);
            console.log(x);
            if (x===1){
                console.log("true")
                alert("you're safe!")




            }
            else(console.log("false"))
            console.log("hitpoints after attack: " + (deathEaterArray[0].hitpoints--))


        }

    },

    playerHeal: function (){
        heal--;
        console.log("heal: " + heal)
        //need to figure out how to make sure player doesn't go over initial hitpoint count
        var healing = Math.floor(Math.random()* 4+ 1);
        console.log("healing: " + healing)
        if (heal > 0){
            test.hitpoints+=healing
            console.log("random healing number: " + healing)
            console.log("current hit points: " + test.hitpoints)

        }

        else{
            alert("no more!")
        }


        

    }, 

    opponentAttack: function(){
        if (Math.floor(Math.random()*20 + 1)==1){
            console.log("spell cast: " + spellsArray[1].name)
        } else if (Math.floor(Math.random()*10 + 1)==1){
            console.log("spell cast: " + spellsArray[5].name);
        } else if (Math.floor(Math.random()*4 + 1)==1){
            console.log("spell cast: " + spellsArray[3].name);
        } else {
            console.log ("spell cast: " + spellsArray[2].name)
        }
        // for (var i=0; i<spellsArray.length;i++){
        //     if (spellsArray[i].chtype==="opponent" && spellsArray[i].difficulty==="easy"){
        //         console.log(spellsArray[i]);
        //     }
        // }
    },

    opponentAttackEasy: function (){
        var totalDamage= deathEaterArray[0].intelligence;
        test.hitpoints=test.hitpoints-totalDamage;
        console.log("test's hp:" + test.hitpoints);
        var spell=spellsArray[2];
        console.log(spell);


    },

    opponentAttackMedium: function (){
        var spell=spellsArray[3];
        console.log(spell);
        var totalDamage= deathEaterArray[0].intelligence * 2;
        test.hitpoints=test.hitpoints-totalDamage;
        console.log("test's hp:" + test.hitpoints);

    }, 

    opponentAttackHard: function (){
        var totalDamage= deathEaterArray[0].intelligence * 3;
        var spell=spellsArray[5];
        console.log(spell);
        test.hitpoints=test.hitpoints-totalDamage;
        console.log("test's hp:" + test.hitpoints);
    },

    opponentAttackInstantKill: function (){
        var spell=spellsArray[1];
        console.log(spell);
        var totalDamage= test.hitpoints
        test.hitpoints=test.hitpoints-totalDamage;
        console.log("test's hp:" + test.hitpoints);

    }, 

    


};




   // 
        
        // if (spellsArray[1].difficulty==="superHard"){
        //     var x= Math.floor(Math.random()*10 + 1);
        //     console.log(x);
        //     if (x===3){
        //         console.log("true");
        //         console.log("hitpoints after attack: " + (deathEaterArray[0].hitpoints--));

        //     } else (console.log("false"))
            

        // }