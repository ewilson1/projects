
//Now time to create the event listener for each of the buttons. We will start with the next button

var ary = ["Oranges", "Apples", "Pineapple", "Bananas", "Watermelon"];
var i=0;

var forward = function(){
	myTextView.hide();
	if(ary[i] == null){
		i=0;
	}
	
	var topValue = 20;
	
		var foodLabel = Ti.UI.createLabel({
			text: ary[i],
			backgroundColor: "white",
			left: 20,
			right: 20,
			height: 35,
			top: topValue,
			borderRadius: 5
		});
		mainWindow.add(foodLabel);
		topValue = foodLabel.top + foodLabel.height + 10;
	console.log(ary[i]);
	i++;
};
	
buttonViewNext.addEventListener("click", forward);


//Now time to build the event listener for the 'previous' button

var backward = function(){
	myTextView.hide();
	if(ary[i] == null){
		i=ary.length-1;
	}

	var topValue = 20;
	
		var foodLabel = Ti.UI.createLabel({
			text: ary[i],
			backgroundColor: "white",
			left: 20,
			right: 20,
			height: 35,
			top: topValue,
			borderRadius: 5
		});
		mainWindow.add(foodLabel);
		topValue = foodLabel.top + foodLabel.height + 10;
	console.log(ary[i]);
	i--;
};

buttonTextPrevious.addEventListener("click", backward);