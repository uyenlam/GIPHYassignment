// create a variable to store topic choices and filled with initial choices
var topics = ["Lady Gaga", "Beyonce", "Justin Bieber", "Bruno Mars"];

//==================================================
function getArtistGif(){
	var artist = $(this).attr('data-name');

	var key = 'dc6zaTOxFJmzC';
	var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + artist + '&api_key=dc6zaTOxFJmzC'

	$.ajax({url: queryUTL, method: 'GET'}).done(function(response){
		var image = '<img src="' + response.url + '" id="' + response.id + '" class="gif-result">'
		$("#display-gif").append(image);
	})
}
//==================================================
function renderButtons(){
	$('#display-buttons').empty();

	// loops through the array of topics
	for (var i = 0; i < topics.length; i++){
		// create a <button> tag
		var a = $('<button>');
		a.addClass('topic'); // added a class
		a.attr('data-name', topics[i]); // added a data attribute to reference the button later
		a.text(topics[i]); // provide text to the button
		$('#display-buttons').append(a); // add the button to the HTML
	}
}

//===================================================

$('#add-choice').on('click', function(){
	// grabs the input from the text box
	var userInput = $('#choice-input').val().trim();

	// push it to the topics array
	topics.push(userInput);

	// create a button for the input
	renderButtons();

	// we have this line so users can hit "enter" instead of clicking on the button
	return false;
})

//==================================================
// creates the initial buttons
renderButtons();