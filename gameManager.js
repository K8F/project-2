var GameManager={
    // setGameStart: function(house){
    //     // this.setTheme(house);
    //     this.setPlayer();
    //     this.setPreFight();
    // },

    // setPlayer: function(id){
    //     //from database
    //     player = new Player(id, name, 50, 100, 0, house)

    // },

    // setTheme: function(house){
    //     switch(house){
    //         case "Gryffindor":
    //         //set theme, something like: 
                    //var getInterface = document.querySelector(".interface");
                    //getInterface.innerHTML = '<img src = ""' + house.toLowerCase() + '.png" class="";
    //             break;
            
    //         case "Ravenclaw":
    //             break;
            
    //         case "Hufflepuff":
    //             break;
                
    //         case "Slytherin":
    //             break;   
            
    //         default:
    //             ;    

    //     }

        
    // }, 

    //setPreFight: function (){

    //}

    //setFight: functin(){
 
    //}



}

var Combat={
    playerAttackEasy: function(){
        var totalDamage=test.intelligence;
        deathEaterArray[0].hitpoints=deathEaterArray[0].hitpoints-totalDamage;
        if (spellsArray[2].difficulty==="easy"){
        console.log("you hit your opponent! opponent health: " + deathEaterArray[0].hitpoints);
        
        if (deathEaterArray[0].hitpoints <= 0){
            alert("you win!")
        } else if(test.defense > 0){
            test.defense--}
            else{
            Combat.opponentAttack();
        }
        }
        

    }, 

    playerAttackMedium: function(){
        if (spellsArray[6].difficulty==="medium"){
            var x= Math.floor(Math.random()* 2 + 1);
            var totalDamage= test.intelligence * 2;

            console.log(x);
            if (x===1){
                deathEaterArray[0].hitpoints = deathEaterArray[0].hitpoints - totalDamage;
                //console.log("true")
                //console.log("total damage: " + totalDamage)
                //console.log("player intelligence:" + test.intelligence);
                console.log("you hit your opponent! opponent health:" + (deathEaterArray[0].hitpoints))

            }
            else(console.log("you missed! oppnent health: " + deathEaterArray[0].hitpoints))

        };
        if (deathEaterArray[0].hitpoints <= 0){
            alert("you win!")
        } else if(test.defense > 0){
            test.defense--}
            else{
            Combat.opponentAttack();
        }

    },

    playerAttackHard: function (){

        if (spellsArray[0].difficulty==="hard"){
            var x= Math.floor(Math.random()* 3 + 1);
            var totalDamage= test.intelligence * 3;
            console.log(x);
            if (x===1){
                deathEaterArray[0].hitpoints = deathEaterArray[0].hitpoints - totalDamage;
                //console.log("true")
                console.log("you hit your opponent! opponent health: " + (deathEaterArray[0].hitpoints))

            }
            else(
                console.log("you missed! opponent health: " + (deathEaterArray[0].hitpoints)))

        }

        if (deathEaterArray[0].hitpoints <= 0){
            alert("you win!")
        } else if(test.defense > 0){
            test.defense--}
            else{
            Combat.opponentAttack();
        };
    },

    playerDefend: function (){
        if (spellsArray[7].effect==="defense"){
            var x= Math.floor(Math.random()* 2+ 1);
            console.log(x);
            if (x===1){
                console.log("true")
                test.defense=Math.floor(Math.random()*3+1)
                console.log("you're safe! player has extra rounds: " + test.defense)

            }
            else if (deathEaterArray[0].hitpoints <= 0){
                alert("you win!")
            } else{
                alert("defend didn't work!")
                Combat.opponentAttack();
            };

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
        };

        if (deathEaterArray[0].hitpoints <= 0){
            alert("you win!")
        } else if(test.defense > 0){
            test.defense--}
            else{
            Combat.opponentAttack();
        }

    }, 

    playerRun: function(){
        var run = Math.floor(Math.random()*2+1);
        if(run==1){
            console.log("success!")
        }
        else{
            Combat.opponentAttack()
        }
    },

    opponentAttack: function(){
        if (Math.floor(Math.random()*50 + 1)==1){
            var spell=spellsArray[1].name;
            console.log("-----------")
            console.log("opponent's round")
            console.log("opponent hit! spell cast: " + spell);
            var totalDamage= test.hitpoints
            test.hitpoints=test.hitpoints-totalDamage;
            console.log("player hp:" + test.hitpoints);

        } else if (Math.floor(Math.random()*20 + 1)==1){
            var totalDamage= deathEaterArray[0].intelligence * 3;
                var spell=spellsArray[5];
                console.log("-----------")
                console.log("opponent's round")
                console.log("opponent hit! spell cast: " + spell.name);
                test.hitpoints=test.hitpoints-totalDamage;
                console.log("player hp:" + test.hitpoints);

        } else if (Math.floor(Math.random()*10 + 1)==1){
            var spell=spellsArray[3];
            console.log("-----------")
            console.log("opponent's round")
            console.log("opponent hit! spell cast: " + spell.name);
            var totalDamage= deathEaterArray[0].intelligence * 2;
            test.hitpoints=test.hitpoints-totalDamage;
            console.log("player hp:" + test.hitpoints);
        } else if (Math.floor(Math.random()*2 + 1)==1){
            var spell=spellsArray[2];
            var totalDamage= deathEaterArray[0].intelligence;
            test.hitpoints=test.hitpoints-totalDamage;
            console.log("-----------")
            console.log("opponent's round")
            console.log("hit! spell cast: " + spell.name);
            console.log("player hp:" + test.hitpoints);
        } else{
            console.log("opponent missed!")
            console.log("player hp: " + test.hitpoints)
        }

        if (test.hitpoints <=0){
            alert("You Lose!") };
        // for (var i=0; i<spellsArray.length;i++){
        //     if (spellsArray[i].chtype==="opponent" && spellsArray[i].difficulty==="easy"){
        //         console.log(spellsArray[i]);
        //     }
        // }
    },

    // opponentAttackEasy: function (){
    //     var totalDamage= deathEaterArray[0].intelligence;
    //     test.hitpoints=test.hitpoints-totalDamage;
    //     console.log("test's hp:" + test.hitpoints);
    //     var spell=spellsArray[2];
    //     console.log(spell);


    // },

    // opponentAttackMedium: function (){
    //     var spell=spellsArray[3];
    //     console.log(spell);
    //     var totalDamage= deathEaterArray[0].intelligence * 2;
    //     test.hitpoints=test.hitpoints-totalDamage;
    //     console.log("test's hp:" + test.hitpoints);

    // }, 

    // opponentAttackHard: function (){
    //     var totalDamage= deathEaterArray[0].intelligence * 3;
    //     var spell=spellsArray[5];
    //     console.log(spell);
    //     test.hitpoints=test.hitpoints-totalDamage;
    //     console.log("test's hp:" + test.hitpoints);
    // },

    // opponentAttackInstantKill: function (){
    //     var spell=spellsArray[1];
    //     console.log(spell);
    //     var totalDamage= test.hitpoints
    //     test.hitpoints=test.hitpoints-totalDamage;
    //     console.log("test's hp:" + test.hitpoints);

    // }, 

    


};