Ti.UI.setBackgroundColor("fff");

//create a window to hold the Navigation window
var mainWindow = Ti.UI.createWindow({
	title: "Eric Wilson's Weather Menu",
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
	height: 100,
	top: 100,
});

//declare a variable to create a label for the text inside the window (view) above
var openText = Ti.UI.createLabel({
	text: "Weather Gallery Page",
	color: "white",
	textAlign: "center",
	font: {fontSize: 20, fontfamily: "Arial"},
});

//now add the text (label) to the first view
openView.add(openText);

var openView1 = Ti.UI.createView({
	backgroundColor: "blue",
	border: 1,
	borderRadius: 20,
	top: openView.top + openView.height + 10,
	left: 50,
	right: 50,
	height: 100,
	
});

//declare a variable to create a label for the text inside the window (view) above
var openText1 = Ti.UI.createLabel({
	text: "Wilson's Weather Team",
	color: "white",
	textAlign: "center",
	font: {fontSize: 20, fontfamily: "Arial"},
});

//now add the text (label) to the view
openView1.add(openText1);

var openView2 = Ti.UI.createView({
	backgroundColor: "blue",
	border: 1,
	borderRadius: 20,
	top: openView1.top + openView1.height + 10,
	left: 50,
	right: 50,
	height: 100,
	
});

//declare a variable to create a label for the text inside the window (view) above
var openText2 = Ti.UI.createLabel({
	text: "Custom Weather Page",
	color: "white",
	textAlign: "center",
	font: {fontSize: 20, fontfamily: "Arial"},
});

var openText3 = Ti.UI.createLabel({
	text: "VFW Term 1506//Eric Wilson",
	top: openView2.top + openView2.height + 50,
	color: "white",
	textAlign: "center",
	font: {fontSize: 15, fontfamily: "Arial"},
	
});

var openText4 = Ti.UI.createLabel({
	text: "Click Below To Get Started",
	top: 50,
	color: "white",
	textAlign: "center",
	font: {fontSize: 25, fontfamily: "Arial"},
	
});

//now add the text (label) to the view
openView2.add(openText2);


//Now, require both .js files here on the bootstrap page, in backwards order...
//var pictures = require("FullScreen");

//var weather = require("Weather_Gallery");

//add the View to the main window
mainWindow.add(openView, openView1, openView2, openText3, openText4);

//open the main window
navWindow.open();