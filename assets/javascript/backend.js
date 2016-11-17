//Global Variables
var weather = ""; //weather condition of queried city/zip
var temperatureF; //temperature in fahrenheit, will hold temp of queried city/zip
//Weather API call parameters
var weatherAPIKey = "APPID=4888c0dfdc6bd6c82a0adf3d3cef0ba3";
var city = "&q=";
var zipcode = "&zip=";
//Query URL
var weatherQuery = "api.openweathermap.org/data/2.5/weather?"+weatherAPIKey;
//Append appropriate parameters depending on user input
if (/*input is city*/) {
	city += /*input*/;
	weatherQuery += city;
} else if (/*input is zip*/) {
	zipcode += /*input*/;
	weatherQuery += zipcode;
}

$.ajax({
	url: weatherQuery,
	method: "GET"
}).done(function(response) {
	//do stuff
	console.log(response);
})