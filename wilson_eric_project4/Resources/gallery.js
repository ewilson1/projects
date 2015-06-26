//declare a variable to run a function, then another variable for the window
var weatherPage = function(){
	var weatherWindow = Ti.UI.createWindow({
		title: "Weather Gallery"
	});
	weatherWindow.add(bgImage);
	//don't forget to call the navigation window from the first page and load the new variable window name
	navWindow.openWindow(weatherWindow);
};

//add event listener here, there will be another event listener at the bottom of the page
openView.addEventListener("click", weatherPage);

var bgImage = Ti.UI.createImageView({
	image: "Weather-Background.jpg"
});

var wxTeam = require("team");