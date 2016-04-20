window.onload = function() {
	var formElement = document.getElementById('form');
	var inputElement = document.getElementById('input')
	console.log("onload")

	formElement.onsubmit = function(event) {
		event.preventDefault();
		var cityName = inputElement.value;
		getWeather(cityName);
	};
};

function printWeather(event) {
	var response = event.target.responseText;
	document.write(response);
}

function getWeather(cityName) {
  var url = 'http://api.openweathermap.org/data/2.5/weather' + 
  '?appid=c2f2d170f6f6fc336058e9851edb828c'+
  '&q=' + cityName +
  '&units=inperial';


  var xhrObject = new XMLHttpRequest();
  xhrObject.open('GET', url, true);
  xhrObject.onload = printWeather;
  xhrObject.send();
}
