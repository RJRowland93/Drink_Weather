//Global Variables
var weather = ""; //weather condition of queried city/zip
var temperatureF; //temperature in fahrenheit, will hold temp of queried city/zip
var chosenDrink; //will hold object that contains the ID used to query cocktailDB
var tipsyarray; //

// globaloboject for drinks
//80+ = summer, 70-79 = fall, 60-69 = spring, 0-59 = winter
var drinks = {

	//summer array with object list inside 
 
	"summer": 	[{ "name": "110 in the Shade", "id": "15423" }, {"name": "151 Florida Bushwacker" , "id": "14588",}, {"name": "Ultimate Margarita" , "id": "14622",}, {"name": "Bloody Mary", "id": "11113" ,}, {"name": "A Gilligan's Island", "id": "16943" }],


	"fall": 	[{"name": "Arctic Fish" , "id": "14622",} ,{"name": "Apricot punch" , "id": "15849" ,}, {"name": "Bloody Mary", "id": "11113" ,}, {"name": "Archbishop" , "id": "11052" ,}, {"name": "Bluebird" , "id": "11120" }],

	//spring array
	"spring": 	[{"name": "Loch Lomond" , "id": "11658" ,}, {"name": "Bloody Mary", "id": "11113" ,}, {"name": "English Rose Cocktail" , "id": "11339" ,}, {"name": "Gin Daisy" , "id": "11408",}, {"name": "Grass Skirt" , "id": "11433"}],

	//winter array 
	"winter": 	[ {"name": "Black Russian" , "id": "11102" ,}, {"name": "Cosmopolitan Martini" , "id": "14133" ,}, {"name": "Affinity" , "id": "11009" ,}, {"name": "Balmoral" , "id": "11060" ,}, {"name": "Cafe Savoy" , "id": "14181" ,}]

}

//pick random drink out of temperature appropriate array
function chooseDrink() {
	
	if(80 <= temperatureF){
		tipsyarray = drinks.summer;
		
	}else if (70 <= temperatureF && temperatureF < 80){
		tipsyarray = drinks.fall;

	}else if(60 <= temperatureF && temperatureF <70){
		tipsyarray = drinks.spring;

	}else{
		tipsyarray = drinks.winter;
	};
	console.log(tipsyarray);
	chosenDrink = tipsyarray[Math.floor(Math.random() * tipsyarray.length)];
	console.log("chosen drink: " + chosenDrink.name + chosenDrink.id);

}

$("#submitButton").on("click", function() {


	//Weather API call parameters
	var weatherAPIKey = "APPID=4888c0dfdc6bd6c82a0adf3d3cef0ba3";
	var cityParam = "&q=";
	var zipcodeParam = "&zip=";
	var unitsParam = "&units=imperial";
	//Query URL
	var weatherQuery = "http://api.openweathermap.org/data/2.5/weather?"+weatherAPIKey+unitsParam;

	var userInput = $("#city").val().trim();
	console.log(userInput);
	console.log("type of user input: " + typeof userInput);
	//boolean variable to determine whether to query with city param or zip param
	var isCity;
	//parse user input to determine if it's a number or not
	var parsedInput = parseInt(userInput);
	console.log(isNaN(parsedInput));
	//if its not a number, it must be a string aka a city
	if (isNaN(parsedInput)) {

		isCity = true;
	} else {
		isCity = false;
	}

	console.log("isCity: " + isCity);
	//if its a city, add userinput to city parameter and add city param to query url

	if (isCity) {
		cityParam += userInput;
		weatherQuery += cityParam;
	} else {
		zipcodeParam += userInput;
		weatherQuery += zipcodeParam;
	}

	console.log("weather query: " + weatherQuery);
	//Call weather API and store weather condition and temperature in F for queried location to global variables

	$.ajax({
		url: weatherQuery,
		method: "GET"
	}).done(function(response) {
		console.log(response);
		weather = response.weather[0].main;
		temperatureF = Math.floor(response.main.temp);
		console.log(weather);
		console.log(temperatureF);

		chooseDrink();
	})
	
	

	//ajax call for coktaildb
	$.ajax({
	url: 'http://www.thecocktaildb.com/api/json/v1/1/',
	method: 'GET',

	
	})
	.done(function() {
		console.log("success");
	});





	//clear input field
	$("#city").val("")
	//prevent refresh
	return false;

})


