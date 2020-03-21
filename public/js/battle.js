var $spellOneBtn = $("#spellOne");
var $spellTwoBtn = $("#spellTwo");
var $spellThreeBtn = $("#spellThree");

var $battleEventsDiv = $("#battleEvents")

$spellOneBtn.on("click", function() {
  $battleEventsDiv.text("Spell 1 activate");
})
$spellTwoBtn.on("click", function() {
  $battleEventsDiv.text("Spell 2 activate");
})
$spellThreeBtn.on("click", function() {
  $battleEventsDiv.text("Spell 3 activate");
  $('#myModal').modal('toggle');
})