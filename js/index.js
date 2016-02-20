
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

// $('.entry').on('submit', function(event){
//   e.preventDefault();
//   showCity();
// });

// function showCity () {
// 	var userEntry = $('#city-type').val();

// 	var newYork = ["New York", "New York City", "NYC"];
// 	var sanFran = ["San Francisco", "SF", "Bay Area"];
// 	var losAngeles = ["Los Angeles", "LA", "LAX"];
// 	var austin = ["Austin", "ATX"];
// 	var sydney = ["Sydney", "SYD"];

// 	//console.log(userEntry);

// 	if(userEntry === newYork[0]; || userEntry === newYork[1]; || userEntry === newYork[2]; ) {
//  	 	$('.container').css('background','url(../images/nyc.jpg)').fadeIn(700);
//  	 } else if(userEntry === sanFran[0]; || userEntry === sanFran[1]; || userEntry === sanFran[2];) {
//  	 	$('.container').css('background','url(../images/sf.jpg)').fadeIn(700);
//  	 } else if(userEntry === losAngeles[0]; || userEntry === losAngeles[1]; || userEntry === losAngeles[2];) {
//  	 	$('.container').css('background','url(../images/la.jpg)').fadeIn(700);
//  	 } else if(userEntry === austin[0]; || userEntry === austin[1]; ) {
//  	 	$('.container').css('background','url(../austin.jpg)').fadeIn(700);
//  	 } else if(userEntry === sydney[0]; || userEntry === sydney[1];) {
//  	 	$('.container').css('background','url(../images/sydney.jpg)').fadeIn(700);
//  	 }
//  	 $('#city-type'.val('');
// };


// $('#submit-btn').on('submit', showCity); //reset form value 

// ---------------------------------------------------------------------------------------------

$(document).ready(function(){



$('#submit-btn').on('submit', function(event){
  e.preventDefault();
  
	var userEntry = $('#city-type').val();

		
		if(userEntry === 'New York' || userEntry === 'New York City' || userEntry === 'NYC'){
	 	 	$('body').css('background-image','url(images/nyc.jpg)');
	 	 } else if(userEntry === 'San Francisco' || userEntry === 'SF' || userEntry === 'Bay Area'){
	 	 	$('body').css('background-image','url(images/sf.jpg)').fadeIn(700);
	 	 } else if(userEntry === 'Los Angeles' || userEntry === 'LA' || userEntry === 'LAX'){
	 	 	$('body').css('background-image','url(images/la.jpg)').fadeIn(700);
	 	 } else if(userEntry === 'Austin' || userEntry === 'ATX' ){
	 	 	$('body').css('background-image','url(austin.jpg)').fadeIn(700);
	 	 } else if(userEntry === 'Sydney' || userEntry === 'SYD'){
	 	 	$('body').css('background-image','url(images/sydney.jpg)').fadeIn(700);
	 	 } else if(userEntry === ''){
	 	 	$('body').css('background-image','url(images/citipix_skyline.jpg)').fadeIn(700);
	 	 }
	 	 $('#city-type').val('');
	});
});
