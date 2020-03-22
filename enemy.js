var key = "$2a$10$9TJcV993TdR154smSIsF5e1Lqac..133PduyWSTXpWEG5tw.SG.1y"
var queryURL = "https://www.potterapi.com/v1/";

var deathEaterArray=[];
getDeathEaters();


function getOpponent(arr) {
    return (arr[Math.floor(Math.random() * arr.length)]);
};


var DeathEater = function (id, name, intelligence, hitpoints) {
    this.id=id
    this.name = name;
    //this.Spell=[];
    //this.role = role;
    //this.stunned = false;
    this.intelligence = intelligence;
    this.hitpoints = hitpoints;
    //this.level = level;
        //random when create character
        //filter out opponents that are too difficult 
    //this.experience = experience;

    //function to show stats
    //function to cast spell
    //random spell 1, 2, 3 strength
    //low chance of instant kill
    this.printTest = function () {
        console.log("Name: " + this.name);
        console.log("\n-------------\n");

        
    };

 
    // this.attack = function (){
    //     for(var i=0; i<spellsArray.length;i++)
    //     if (Spell.chtype==="opponent"){
    //         console.log(Spell[i])
    //     }

    // }


    // this.attack ===>  if you loose then your experie decre 
    // this.defend == > 

    //function to show stats
    //function to cast spell
    //on-click
    //if easy spell: 
    //always works hit opponent intelligence * 1
    //if medium spell:
    //50/50 chance hit opponent intelligence * 2
    //if hard spell:
    //25/100 hit opponent intelligence * 3
    //health
        //1 time to heal
    //if defend?? 
        //50/50 chance


    //if opponent hp && player hp > 0 game continues
    //else if opponent hp < 0 player wins; ++experience

    //else if player hp < 0 player loses; --experience





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


        });
        console.log(getOpponent(deathEaterArray))


    };
