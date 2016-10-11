var city = '';
var state = '';
var APIKey = 'df231997dd37c42d';

//loadWeather
var loadWeather = function(response){
	
	if(response.response.error){
		alert(response.response.error.description);
		return;
	};
	
	var thisCity = response.current_observation.display_location.city;
	var temp = response.current_observation.temp_f + '°';
	var weather = response.current_observation.weather;
	var icon = response.current_observation.icon_url;
	
	//console.log('The current weather in ' + thisCity + ' is ' + weather + ' with a temperature of ' + temp);
	
	$('.temperature').text(temp);
	$('.weather').text(weather);
	$('.currentCity').val(thisCity);
	$('.weatherIcon').html('<img src="' + icon + '">');
	
	
};


//getWeather function
var getWeather = function(){
	
	var thisURL = 'http://api.wunderground.com/api/' + APIKey + '/conditions/q/' + state + '/' + city + '.json'	
	
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
	city = $('.currentCity').val();	
	if(city == null || city == ''){
		
		alert('You ned to list a city!');
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
		e.preventDefault();
		setLocation();
	});
	
};


$( document ).ready(function(){
	
	init();
	
});