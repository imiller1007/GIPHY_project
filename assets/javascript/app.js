//dont forget prevent.default
// intitial variables----------------------------------------------------------------
var charList = [];
var button = $("button").attr("id");
// functions--------------------------------------------------------------------------

function populateButts() {
    
    $("#yourButtons").empty();
    for(var i = 0; i<charList.length; i++){
        $("#yourButtons").append("<button id='char' class='createdButton' gifsearch='" + charList[i] + "' type='submit'>"+
        charList[i] + "</button>");
    
    }
}

function displayGifs() {

    var gifQuery = $(this).attr("gifsearch");
    console.log(gifQuery);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    gifQuery + "&api_key=dc6zaTOxFJmzC&limit=15";

    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        
    $("#gifsHere").empty();
        var results = response.data;
  
        for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div class='item'>");
  
        // var rating = results[i].rating;
  
        // var p = $("<p>").text("Rating: " + rating);
  
        var personImage = $("<img class='rounded float-left'>");
        personImage.attr("src", results[i].images.fixed_height.url);
  
        // gifDiv.prepend(p);
        gifDiv.prepend(personImage);
  
        $("#gifsHere").prepend(gifDiv);
  
        }
      
      
    });

  }


// main processes-----------------------------------------------------------------------

$("#userSub").on("click", function(event) {
    event.preventDefault();
    var char = $("input").val().trim();
    charList.push(char);
    populateButts();
    $("input").val("");
    console.log(charList);
});

$("button").on("click", function() {
    
    if($(this).attr("data-person")){

    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=dc6zaTOxFJmzC&limit=15";

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
          $("#gifsHere").empty();
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='item'>");

        //   var rating = results[i].rating;

        //   var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img class='rounded float-left' >");
          personImage.attr("src", results[i].images.fixed_height.url);

        //   gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifsHere").prepend(gifDiv);

        }
    });
    
}

});


$(document).on("click", "#char", displayGifs);
    

    








        



























