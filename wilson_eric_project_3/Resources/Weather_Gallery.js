//declare a variable to hold a function for the weatherWindow
//var weatherPage = function(picSource, picDetail){
	var weatherWindow = Ti.UI.createWindow({
		title: "Weather Gallery"
	});


var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imagesFolder.getDirectoryListing();
console.log(imageFiles);

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var rowCount = 3;
var margin = 10;
var trueCanvasWidth = (pWidth - margin*5);
var size = (trueCanvasWidth/4);


var mainWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	layout: "vertical"
	
});
	
var header = Ti.UI.createLabel({
	text: "Weather From Around The World",
	textAlign: "center",
	font: {fontSize: 18, fontFamily: "Arial", fontWeight: "bold"},
	height: 30
});

var closeButton = Ti.UI.createLabel({
	text: "Close Window",
	backgroundColor: "d3d3d3",
	color: "grey",
	height: 50,
	font: {fontSize: 16, fontFamily: "Arial"},
	width: "100%",
	bottom: 0,
	textAlign: "center",
});

var border = Ti.UI.createView({
	backgroundColor: "#cecece",
	height: 1,
	width: pWidth,
	top: 20,
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
		borderRadius: 20
	});
	//we are going to create an image view for each one of these views
	var thumb = Ti.UI.createImageView({
		image: "images/" + imageFiles[i],
		top: 0,
		width: view.width*2
		
	});
	//we also need to add our new image into the view
	view.add(thumb);
	viewContainer.add(view);
}

mainWin.add(border, header);
mainWin.add(viewContainer);
mainWin.add(closeButton);
mainWin.open();

openWindow.addEventListener("click", weatherWindow);
