
/*Pseudo Code:
	When the user types in a city name the background image changes to match that respective city
	Get userEntry
	Store userEntry
	Background changes on click of "Submit"
	 	If user types "New York" or "New York City" or "NYC" background is image of NYC
	 	If user types "San Francisco" or "SF" or "Bay Area" background is image of San Francisco
	 	If user types "Los Angeles" or "LA" or "LAX" background is image of LA
	 	If user types "Austin" or "ATX" background is image of Austin 
	 	If user types "Sydney" or "SYD" background is image of Sydney
	Delay code frome excuting until images have loaded
	Clear field after submission*/


// ---------------------------------------------------------------------------------------------


$('#submit-btn').click(function(event){
  event.preventDefault();
  removeImg();
  showCity();
});

function showCity(){
	var userEntry = $('#city-type').val();
		
	if(userEntry === 'New York' || userEntry === 'New York City' || userEntry === 'NYC'){
		addImg('nyc');
 	 } else if(userEntry === 'San Francisco' || userEntry === 'SF' || userEntry === 'Bay Area'){
 	 	addImg('sf');
 	 } else if(userEntry === 'Los Angeles' || userEntry === 'LA' || userEntry === 'LAX'){
 	 	addImg('la');
 	 } else if(userEntry === 'Austin' || userEntry === 'ATX' ){
 	 	addImg('austin');
 	 } else if(userEntry === 'Sydney' || userEntry === 'SYD'){
 	 	$('body').addClass('sydney');
 	 }
 	 $('#city-type').val('');
};

function removeImg() {
	$('body').removeClass();
};

function addImg(city) {
	$('body').addClass(city);
};


