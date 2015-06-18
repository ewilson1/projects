//var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
//var imageFiles = imagesFolder.getDirectoryListing();


var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var imageFiles = ["lightning storm.jpg", "lightning-storm.jpg", "lightning1.jpg","lightning2.jpg","lightning3.jpg"];
var itemCount = 30;
var margin = 10;
var trueCanvasWidth = (pWidth - margin*5);
var size = (trueCanvasWidth/4);
	

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

var viewContainer = Ti.UI.createScrollView({
	top: 0,
	layout: "horizontal",
	width: pWidth,
	contentWidth: pWidth,
	height: pHeight-border.height-border.top,
	showVerticalScrollIndicator: true,
	backgroundColor: "#fef",
});

for(var i=0; i<imageFiles.length; i++){
	var view = Ti.UI.createView({
		backgroundColor: "#33ccff",
		top: margin,
		left: margin,
		width: size,
		height: size,
	});
	var newImage = Ti.UI.createImageView({
		image: "images/" + imageFiles[i]
	});
	view.add(newImage);
	viewContainer.add(view);
}

mainWin.add(border);
mainWin.add(viewContainer);
mainWin.open();