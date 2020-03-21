var $addCharacterBtn = $("#addCharacter");

$addCharacterBtn.on("click", function() {
  $('#myModal').modal('toggle');
  console.log("Add char");
})