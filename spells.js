
var spellsArray=[];
getSpells();



var key = "$2a$10$9TJcV993TdR154smSIsF5e1Lqac..133PduyWSTXpWEG5tw.SG.1y"
var queryURL = "https://www.potterapi.com/v1/";

var Spell = function (id, name, chtype, difficulty, effect) {
    this.id=id;
    this.name = name;
    this.chtype = chtype;//player or opponent
    this.difficulty=difficulty //how hard it is to cast spell- easy, medium, hard
    this.effect = effect; //i.e. stun(optional), damage, heal, kill (special death eater spell)
    //this.level = level; //only available for certain levels 
    //function that shows spell options for character

    //icon for spell

};


function getSpells(){
    $.ajax(
        {
            url: queryURL + "spells" + "?key=" + key,
            method: "GET"
        }).then(function(response){
            console.log("=================")
            console.log("spells")
            console.log("==================")
            j=0;
            spellsArray.push(new Spell(0, response[58].spell,"player", "hard", "damage"));
            spellsArray.push( new Spell (1, response[15].spell, "opponent", "superHard", "instantKill"));
            spellsArray.push( new Spell(2, response[87].spell, "opponent", "easy", "damage"));
            spellsArray.push(new Spell(3, response[34].spell, "opponent", "medium", "damage"));
            spellsArray.push(new Spell(4, response[59].spell, "player", "easy", "damage"));
            spellsArray.push(new Spell(5, response[136].spell, "opponent", "hard", "damage"));
            spellsArray.push (new Spell(6, response[51].spell, "player", "medium", "damage"));
            spellsArray.push (new Spell(7, response[63].spell, "player", "medium", "defense"));
            spellsArray.push (new Spell(8, response[53].spell, "player", "easyLimited", "heal"));


            console.log(spellsArray)

        });




};

