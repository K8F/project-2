var spellsArray=[];
getSpells();



var key = "$2a$10$9TJcV993TdR154smSIsF5e1Lqac..133PduyWSTXpWEG5tw.SG.1y"
var queryURL = "https://www.potterapi.com/v1/";

var Spell = function (name, chtype, difficulty, effect) {
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
            spellsArray.push(new Spell(response[58].spell,"player", "hard", "damage"));
            spellsArray.push( new Spell (response[15].spell, "opponent", "superHard", "instantKill"));
            spellsArray.push( new Spell(response[87].spell, "opponent", "easy", "damage"));
            spellsArray.push(new Spell(response[34].spell, "opponent", "medium", "damage"));
            spellsArray.push(new Spell(response[59].spell, "player", "easy", "damage"));
            spellsArray.push(new Spell(response[136].spell, "opponent", "hard", "damage"));
            spellsArray.push (new Spell(response[51].spell, "player", "medium", "damage"));
            spellsArray.push (new Spell(response[63].spell, "player", "medium", "defense"));
            spellsArray.push (new Spell(response[53].spell, "player", "easyLimited", "heal"));


            console.log(spellsArray)

        });




};