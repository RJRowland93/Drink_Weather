//Global Variables
var weather = ""; //weather condition of queried city/zip
var temperatureF; //temperature in fahrenheit, will hold temp of queried city/zip

$("#searchBar").on("submit", function() {

	//Weather API call parameters
	var weatherAPIKey = "APPID=4888c0dfdc6bd6c82a0adf3d3cef0ba3";
	var cityParam = "&q=";
	var zipcodeParam = "&zip=";
	var unitsParam = "&units=imperial";
	//Query URL
	var weatherQuery = "http://api.openweathermap.org/data/2.5/weather?"+weatherAPIKey+unitsParam;

	var userInput = $("#search").val().trim();
	console.log(userInput);
	console.log("type of user input: " + typeof userInput);
	//boolean variable to determine whether to query with city param or zip param
	var isCity;

	var parsedInput = parseInt(userInput);
	console.log(isNaN(parsedInput));

	if (isNaN(parsedInput)) {
		isCity = true;
	} else {
		isCity = false;
	}
	console.log("isCity: " + isCity);

	if (isCity) {
		cityParam += userInput;
		weatherQuery += cityParam;
	} else {
		zipcodeParam += userInput;
		weatherQuery += zipcodeParam;
	}

	console.log("weather query: " + weatherQuery);

	$.ajax({
		url: weatherQuery,
		method: "GET"
	}).done(function(response) {
		console.log(response);
		weather = response.weather[0].main;
		temperatureF = response.main.temp;
		console.log(weather);
		console.log(temperatureF);
	})

	$("#search").val("")
	//prevent refresh
	return false;
})




// Decide which drink is appropriate for current weather.
// Query cocktail API for that drink.
// Display relevant cocktail info


//ajax call for coktaildb
$.ajax({
	url: 'http://www.thecocktaildb.com/api/json/v1/1/',
	method: 'GET',
	
})
.done(function() {
	console.log("success");
});









