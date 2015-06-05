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

var displayItems = function(){
	myTextView.hide();

	topValue = 20;
	
	for(var i=0, j=food.length; i<j; i++){
		var foodLabel = Ti.UI.createLabel({
			text: food[i],
			backgroundColor: "white",
			left: 20,
			right: 20,
			height: 35,
			top: topValue,
			borderRadius: 5
		});
		mainWindow.add(foodLabel);
		topValue = foodLabel.top + foodLabel.height + 10;
	}
	
	
};

buttonView.addEventListener("click", displayItems);

mainWindow.add(myTextView, buttonView);
myTextView.add(textLabel);
buttonView.add(buttonText);
mainWindow.open();
