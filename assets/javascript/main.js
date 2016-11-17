var weatherAPIKey = "APPID=4888c0dfdc6bd6c82a0adf3d3cef0ba3";
var city = "&q=";
var zipcode = "&zip=";

var weatherQuery = "api.openweathermap.org/data/2.5/weather?"+weatherAPIKey;

if (/*input is city*/) {
	city+= /*input*/
	weatherQuery+= city;
}

$.ajax({
	url: weatherQuery
})