$(function() { 
	$('form').on('submit', function (event) {
		$('.output').empty();
		event.preventDefault();
		var userInput = $('input').val();
		var cities = userInput.split(",");
		
		for (var i=0; i < cities.length; i++) {
			var cityName = cities[i];
			getWeather(cityName);
		}
		
	});
});

function printWeather(response) {
	var element =	$('<p>', {
		text: response.main.temp
	});
	var city =	$('<p>', {
		text: response.name
	});
	$('.output').append(city);
	$('.output').append(element);
}

function getWeather(cities) {
  var url = 'https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather' + 
  '?appid=c2f2d170f6f6fc336058e9851edb828c'+
  '&q=' + cities +
  '&units=imperial';


	$.get(url, printWeather)
}
