$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    for (var i = 0; i < blanks.length; i += 1) {
      var userInput = $("input#" + blanks[i]).val();
      $("." + blanks[i]).text(userInput).val();
    }

  /*  blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      console.log(userInput);
      $("." + blank).text(userInput).val();
    }); */

    $("#story").show();

    event.preventDefault();
  });
});
