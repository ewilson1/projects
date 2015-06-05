Ti.UI.setBackgroundColor("#000");

var food = ["Pasta", "Salad", "Apple", "Pizza"];

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "black",
});

var myTextView = Ti.UI.createView({
	backgroundColor: "white",
	height: 150,
	top: 120,
	left: 20,
	right: 20,
	borderRadius: 5
});

var textLabel = Ti.UI.createLabel({
	text: "Click button below to start",
	font: {fontSize: 20, fontFamily: "Arial"},
	textAlign: "center",
	top: 25,
	right: 25,
	left: 25,
	bottom: 25
	
});

var buttonView = Ti.UI.createView({
	backgroundColor: "#23ba00",
	top: myTextView.top + myTextView.height + 15,
	left: 20,
	right: 20,
	borderRadius: 5,
	height: 50
	
});

var buttonText = Ti.UI.createLabel({
	color: "#fff",
	font: {fontSize: 16, fontFamily: "Arial"},
	textAlign: "center",
	text: "Change Text"
	
});

var changeText = function(){
	textLabel.text = "Hello Michelle, I love you";
};

buttonView.addEventListener("click", changeText);

mainWindow.add(myTextView, buttonView);
myTextView.add(textLabel);
buttonView.add(buttonText);
mainWindow.open();
