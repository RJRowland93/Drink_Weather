var weatherAPIKey = "APPID=4888c0dfdc6bd6c82a0adf3d3cef0ba3";
var town = "&q=";
var zipcode = "&zip=";

var weatherQuery = "api.openweathermap.org/data/2.5/weather?"+weatherAPIKey;

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