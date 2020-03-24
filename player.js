

var player;
var heal = 2;




var Player = function (id, name, intelligence, hitpoints, defense, experience, house, location, agility, history) {
    this.id=id;
    this.name = name;
    this.intelligence = intelligence;
    this.hitpoints = hitpoints;
    this.defense=defense;
    this.experience = experience;
    this.house = house;
    this.location=location;
    this.agility=agility;
    this.history=[];
};
    

var test = new Player (1, "kate", 5, 100, 0, 2, "Hufflepuff", 0, 120, []);

console.log(test);





   // 
        
        // if (spellsArray[1].difficulty==="superHard"){
        //     var x= Math.floor(Math.random()*10 + 1);
        //     console.log(x);
        //     if (x===3){
        //         console.log("true");
        //         console.log("hitpoints after attack: " + (deathEaterArray[0].hitpoints--));

        //     } else (console.log("false"))
            

        // }