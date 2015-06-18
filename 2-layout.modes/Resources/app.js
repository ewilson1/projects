var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var itemCount = 15;
var rowCount = 3;
var margin = 10;
var trueCanvasWidth = (pWidth - margin*4);
var size = (trueCanvasWidth/3);

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	//we need to add some additonal features for a cleaner look, in this case horizontal to the Parent Window
	layout: "horizontal"
});

var border = Ti.UI.createView({
	backgroundColor: "#cecece",
	height: 1,
	width: pWidth,
	top: 20,
});

//This is the Parent container. We want to add a layout property to the Parent container, viewContainer in this case.
var viewContainer = Ti.UI.createView({
	top: 0,
	width: pWidth,
	backgroundColor: "#fef",
	//we have two choices with our layout view, vertical and horizontal.
	layout: "horizontal"
});

//lets create the code to create the grid of boxes

for(var i=0; i<itemCount; i++){
	//for each itemCount I want to create a veiw
	var view = Ti.UI.createView({
		backgroundColor: "#33ccff",
		top: margin,
		left: margin,
		width: size,
		height: size
	});
	//now lets create a label to display the numbers on the boxes
	var text = Ti.UI.createLabel({
		text: i+1,
		color: "fff"
	});
	//now lets add the text to the view
	view.add(text);
	//now lets add the view to the viewContainer
	viewContainer.add(view);
}

mainWin.add(border);
mainWin.add(viewContainer);
mainWin.open();
