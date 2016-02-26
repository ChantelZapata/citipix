
/*Pseudo Code:
	When the user selects a city name the background image changes to match that respective city
	Get userEntry
	Store userEntry
	Background changes on click of "Submit"
	 	If user selects "NYC" background is image of NYC
	 	If user selects "SF" background is image of San Francisco
	 	If user selects "LA" background is image of LA
	 	If user selects "ATX" background is image of Austin 
	 	If user selects "SYD" background is image of Sydney
	Delay code frome excuting until images have loaded

/*.on(change)
*/
/*create an array
use a 4 loop
to insert these options
// ---------------------------------------------------------------------------------------------
*/

var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
/*document.getElementById("demo").innerHTML = cars;*/


for (var i = 0; i < cities.length; i++) { 
	console.log(cities[i]); //use i as you set that letter to be representative of the index of the array
	$('#city-options').append('<option val="cityname">cityname</option>').attr("cityname", "+cities[i]+");
};

$('#city-options').on('change', function(event){
  event.preventDefault();
  removeImg();
  showCity();
});

function showCity(){
	var cityname = $('#city-option').val();
		
	if(cities === [0]){
		addImg('nyc');
 	 } else if(cities === [1]){
 	 	addImg('sf');
 	 } else if(cities === [2]){
 	 	addImg('la');
 	 } else if(cities === [3]){
 	 	addImg('austin');
 	 } else if(cities === [4]){
 	 	addImg('sydney');
 	 }
 	 $('#city-option').val('');
};

function removeImg() {
	$('body').removeClass();
};

function addImg(city) {
	$('body').addClass(city);
};


