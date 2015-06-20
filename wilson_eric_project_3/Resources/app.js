Ti.UI.setBackgroundColor("fff");

//create a window to hold the Navigation window
var mainWindow = Ti.UI.createWindow({
	title: "Eric Wilson's Weather",
	backgroundImage: "Weather-Background.jpg"	
});
	var navWindow = Ti.UI.iOS.createNavigationWindow({
		window: mainWindow
	});

//declare a variable to create the view, which will hold the text
var openView = Ti.UI.createView({
	backgroundColor: "blue",
	border: 1,
	borderRadius: 20,
	left: 50,
	right: 50,
	height: 150,
});

//declare a variable to create a label for the text inside the window (view) above
var openText = Ti.UI.createLabel({
	text: "Click here to see weather from around the world!",
	color: "white",
	textAlign: "center",
	font: {fontSize: 20, fontfamily: "Arial"},
});

//now add the text (label) to the view
openView.add(openText);

//Now, require both .js files here on the bootstrap page, in backwards order...
var pictures = require("FullScreen");

var weather = require("Weather_Gallery");

//add the View to the main window
mainWindow.add(openView);

//open the main window
navWindow.open();