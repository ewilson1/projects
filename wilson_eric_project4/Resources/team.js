//declare a variable to run a function, then another variable for the window
var teamPage = function(){
	var teamWindow = Ti.UI.createWindow({
		title: "Weather Team"
	});
	teamWindow.add(bgImage);
	//don't forget to call the navigation window from the first page and load the new variable window name
	navWindow.openWindow(teamWindow);
};

//add event listener here, there will be another event listener at the bottom of the page
openView1.addEventListener("click", teamPage);

var bgImage = Ti.UI.createImageView({
	image: "Weather-Background.jpg"
});

var wxCustom = require("custom");