Ti.UI.setBackgroundColor("#000");

//Now create a window for all the elements to fit in
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "black",
});

//Now create the first window, which will hold the array of items to be displayed
var myTextView = Ti.UI.createView({
	backgroundColor: "white",
	height: 150,
	top: 120,
	left: 20,
	right: 20,
	borderRadius: 5	
});

//Now create a text a text Label to go inside of the above window view

var textLabel = Ti.UI.createLabel({
	text: "Click buttons below to start reading about the fruit we have available",
	font: {fontSize: 20, fontFamily: "Arial"},
	textAlign: "center",
	top: 25,
	right: 25,
	left: 25,
	bottom: 25	
});

//Now create the first button view on the left, 'Previous' will be the new name

var buttonViewPrevious = Ti.UI.createView({
	backgroundColor: "#23ba00",
	width: 100,
	height: 50,
	top: myTextView.top + myTextView.height + 15,
	left: 20,
	right: 20,
	borderRadius: 5
});

//Now create the text for the left button

var buttonTextPrevious = Ti.UI.createLabel({
	color: "#fff",
	font: {fontSize: 16, fontFamily: "Arial"},
	textAlign: "left",
	text: "Previous"	
});

//Now let's seprate the buttons into a left and right button, now called next and previous

var buttonViewNext = Ti.UI.createView({
	backgroundColor: "#23ba00",
	width: 100,
	height: 50,
	top: myTextView.top + myTextView.height + 15,
	right: 20,
	borderRadius: 5
});

//Now create the text for the right button

var buttonTextNext = Ti.UI.createLabel({
	color: "#fff",
	font: {fontSize: 16, fontFamily: "Arial"},
	textAlign: "right",
	text: "Next"	
});

	
var loadFile = require("functions");

mainWindow.add(myTextView, buttonViewPrevious, buttonViewNext);
myTextView.add(textLabel);
buttonViewPrevious.add(buttonTextPrevious);
buttonViewNext.add(buttonTextNext);
mainWindow.open();
