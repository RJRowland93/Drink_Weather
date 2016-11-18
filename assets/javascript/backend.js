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
//still need to add the if statments to select drink array acording to weather and also a random number for index of the array 


// oboject for drinks

var drinks = {
 
	"summer": 	[{ "name": "110 in the Shade", "id": "15423" }, {"name": "151 Florida Bushwacker" , "id": "14588",}, {"name": "Ultimate Margarita" , "id": "14622",}, {"name": "Bloody Mary", "id": "11113" ,}, {"name": "A Gilligan's Island", "id": "16943" }],

	"fall": 	[{"name": "Arctic Fish": , "id": "14622",} ,{"name": "Apricot punch" , "id": "15849" ,}, {"name": "Bloody Mary", "id": "11113" ,}, {"name": "Archbishop" , "id": "11052" ,}, {"name": "Bluebird" , "id": "11120" }],

	"spring": 	[{"name": "Loch Lomond" , "id": "11658" ,}, {"name": "Bloody Mary", "id": "11113" ,}, {"name": "English Rose Cocktail" , "id": "11339" ,}, {"name": "Gin Daisy" , "id": "11408",}, {"name": "Grass Skirt" , "id": "11433"}],

	"winter": 	[ {"name": "Black Russian" , "id": "11102" ,}, {"name": "Cosmopolitan Martini" , "id": "14133" ,}, {"name": "Affinity" , "id": "11009" ,}, {"name": "Balmoral" , "id": "11060" ,}, {"name": "Cafe Savoy" , "id": "14181" ,}]




}




//ajax call for coktaildb
$.ajax({
	url: 'http://www.thecocktaildb.com/api/json/v1/1/',
	method: 'GET',
	
})
.done(function() {
	console.log("success");
});









