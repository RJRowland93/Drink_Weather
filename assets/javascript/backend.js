//Global Variables
var weather = ""; //weather condition of queried city/zip
var temperatureF; //temperature in fahrenheit, will hold temp of queried city/zip

//Weather API call parameters
var weatherAPIKey = "APPID=4888c0dfdc6bd6c82a0adf3d3cef0ba3";
var cityParam = "&q=";
var zipcodeParam = "&zip=";
var unitsParam = "&units=imperial";
//Query URL
var weatherQuery = "api.openweathermap.org/data/2.5/weather?"+weatherAPIKey+unitsParam;

//Append appropriate parameters depending on user input
//input id is search
//submit button

$("#submitButton")/*?*/.on("click", function() {

	var userInput = $("#search").val().trim();
	console.log(userInput);
	//boolean variable to determine whether to query with city param or zip param
	var isCity;

	var parsedInput = parseInt(userInput);
	console.log(parsedInput);
	if (parsedInput === NaN) {
		isCity = true;
	} else {
		isCity = false;
	}

	if (isCity) {
		cityParam += userInput;
		weatherQuery += cityParam;
	} else {
		zipcodeParam += userInput;
		weatherQuery += zipcodeParam;
	}

	console.log(weatherQuery);

	$.ajax({
		url: weatherQuery,
		method: "GET"
	}).done(function(response) {
		console.log(response);
		weather = response.weather.main;
		temperatureF = response.main.temp;
	})

	console.log(weather);
	console.log(temperatureF);

})




// Decide which drink is appropriate for current weather.
// Query cocktail API for that drink.
// Display relevant cocktail info