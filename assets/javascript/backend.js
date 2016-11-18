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
if (/*input is city*/) {
	cityParam += /*input*/;
	weatherQuery += cityParam;
} else if (/*input is zip*/) {
	zipcodeParam += /*input*/;
	weatherQuery += zipcodeParam;
}

$.ajax({
	url: weatherQuery,
	method: "GET"
}).done(function(response) {
	//do stuff
	console.log(response);
});





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









