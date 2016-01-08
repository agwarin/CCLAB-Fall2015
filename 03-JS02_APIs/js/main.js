var city = '';
var state = '';
var APIKey = 'e4a681faf69d3868';

//loadWeather
var loadWeather = function(response){
	
	if(response.response.error){
		alert(response.response.error.description);
		return;
	};
	
	var thisCity = response.current_observation.display_location.city;
	var temp = response.observation_location.full + '°';
	var weather = response.current_observation.weather;
	var icon = response.current_observation.icon_url;
	
	//console.log('The current weather in ' + thisCity + ' is ' + weather + ' with a temperature of ' + temp);

	//in jQuery, this is the same as 'document.getElementsByClassName("temperature").innerText = temp;' in vanilla JS	
	$('.temperature').text(temp);
	$('.weather').text(weather);
	$('.currentCity').val(thisCity);
	$('.weatherIcon').html('<img src="' + icon + '">');
	
	
};


//getWeather function
var getWeather = function(){
	
	var thisURL = 'http://api.wunderground.com/api/' + APIKey + '/conditions/q/' + state + '/' + city + '.json'	
	// e.g. http://api.wunderground.com/api/'MY_KEY'/conditions/q/NY/brooklyn.json


	$.ajax({
		url : thisURL,
		dataType : "jsonp",
		success : function(response){
			loadWeather(response);	
		}
	});
	
};




//setLocation function
var setLocation = function(){

	//define the current city
	//since currentCity is 
	city = $('.currentCity').val();	
	if(city == null || city == ''){
		
		alert('You need to list a city!');
		return;
		
	};
	state = $('.currentState').val();
	
	console.log('You want the weather for ' + city + ', ' + state);
	getWeather();
	
};


//init

var init = function(){

	console.log('What\'s the weather?');
	
	$('#submit').click(function(e){
		//we're not actually submitting a form in the formal sense, so tell the browser not to actually submit anything in the traditional sense
		e.preventDefault();

		//gather our user supplied information
		setLocation();
	});
	
};


$( document ).ready(function(){
	
	init();
	
});
