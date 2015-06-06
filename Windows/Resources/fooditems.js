var food = ["Pasta", "Salad", "Apple", "Pizza"];
var i=0;

var displayItems = function(){
	myTextView.hide();

	var topValue = 20;
	
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

buttonView.addEventListener("click.", displayItems);
