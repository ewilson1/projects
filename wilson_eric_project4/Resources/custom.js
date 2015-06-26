//declare a variable to run a function, then another variable for the window
var customPage = function(){
	var customWindow = Ti.UI.createWindow({
		title: "Custom Weather"
	});
	customWindow.add(bgImage);
	//don't forget to call the navigation window from the first page and load the new variable window name
	navWindow.openWindow(customWindow);
};

//add event listener here, there will be another event listener at the bottom of the page
openView2.addEventListener("click", customPage);

var bgImage = Ti.UI.createImageView({
	image: "Weather-Background.jpg"
});