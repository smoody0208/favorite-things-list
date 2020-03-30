$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
  var animalInput = $("input#animal").val();
  var sportInput = $("input#sport").val();
  var colorInput = $("input#color").val();
  var seasonInput = $("input#season").val();

  var array = [animalInput, sportInput, colorInput, seasonInput]
  $(".animal").text(array[0]);
  $(".sport").text(array[1]);
  $(".color").text(array[2]);
  $(".season").text(array[3]);
  });
});