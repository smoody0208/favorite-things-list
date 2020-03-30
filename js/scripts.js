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

  var newArray = [];
  newArray.push(array[0]);
  newArray.push(array[1]);
  newArray.push(array[2]);

  $("#list").append("<li>"+newArray[0]+"</li>");
  $("#list").append("<li>"+newArray[1]+"</li>");
  $("#list").append("<li>"+newArray[2]+"</li>");


  $("#results").show();
  $("#list").show();
  });
});