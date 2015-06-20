Ti.UI.setBackgroundColor("fff");

//create a window to hold the Navigation window
var mainWindow = Ti.UI.createWindow({
	backgroundImage: "Weather-Background.jpg",
	top: 20
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

//declare a variable to call (look for a 'click') a second .js page
var weather = require("Weather_Gallery");

//add the View to the main window
mainWindow.add(openView);
//open the main window
mainWindow.open();