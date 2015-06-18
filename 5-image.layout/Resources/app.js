var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var imageFiles = ["lightning storm.jpg", "lightning1.jpg", "lightning2.jpg", "lightning3.jpg", "lightning4.jpg"];
var itemCount = 30;
var rowCount = 3;
var margin = 10;
var trueCanvasWidth = (pWidth - margin*4);
var size = (trueCanvasWidth/3);
	

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	layout: "horizontal"
});

var border = Ti.UI.createView({
	backgroundColor: "#cecece",
	height: 1,
	width: pWidth,
	top: 20
});

var viewContainer = Ti.UI.createScrollView({//adding the word 'Scroll' to the view; yet they scroll across and not down.
	top: 0,
	layout: "horizontal",
	width: pWidth,
	//'contentWidth' keeps the items from scrolling striaght across the upper part of the screen.
	contentWidth: pWidth,//setting this to the same value allows the content to stay within the pWidth.
	height: pHeight-border.height-border.top,//this keeps the scroll from sticking to the top.
	showVerticalScrollIndicator: true,//this is a boolean value
	backgroundColor: "#fef",
});

for(var i=0; i<itemCount; i++){
	var view = Ti.UI.createView({
		backgroundColor: "#33ccff",
		top: margin,
		left: margin,
		width: size,
		height: size,
	});
	var text = Ti.UI.createLabel({text: i+1, color: "#fff"});
	view.add(text);
	viewContainer.add(view);
}

mainWin.add(border);
mainWin.add(viewContainer);
mainWin.open();
