
# Drink_Weather
Tipsy Weather is a website that recommends a drink based on the weather.

The front end is constructed mainly from the Materialize CSS Framework. The website makes heavy use of the card component and hoverable class. Other features include an image slider at the top of the website and a links in the footer that display a slide out side nav containing personal bios.

The backend makes use of the Open Weather Map API and the Cocktail DB API. When the user enters a location in the search bar, an AJAX call is made to the Open Weather Map API. When the temperature is found, an array of drinks based on the temperatures -60, 60-70, 70-80, and +80 degrees Farenheit is selected. A random drink from the array is chosen and makes another AJAX call to the Cocktail DB API. A picture of the drink, the ingredients and the directions for the drink is then taken from the Cocktail JSON and put into a Materialize Card component.

<p>Screenshot 1</p>
![screenshot](assets/images/screen1.jpg?raw=true)
<p>Screenshot 2</p>
![screenshot](assets/images/screen2.jpg?raw=true)
<p>Screenshot 3</p>
![screenshot](assets/images/screen3.jpg?raw=true)
<p>Screenshot 4</p>
![screenshot](assets/images/screen4.jpg?raw=true)