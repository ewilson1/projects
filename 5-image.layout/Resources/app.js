var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var imageFiles = ["lightning storm.jpg", "lightning1.jpg", "lightning2.jpg", "lightning3.jpg", "lightning4.jpg"];
// we are creating an array and connecting it to a view (the for loop below) using 'imageFiles' as the new term and 
//adding the .length property to the string

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

for(var i=0; i<imageFiles.length; i++){
	var view = Ti.UI.createView({
		backgroundColor: "#33ccff",
		top: margin,
		left: margin,
		width: size,
		height: size,
	});
	//we are going to create an image view for each one of these views
	var thumb = Ti.UI.createImageView({
		//once again, we are using the 'image' property to call up the image
		//the images themselves are stored in the imageFiles array (up top), so we will use that
		//this will return the file names. Remember, our files are located inside a folder
		//called 'images'. So we need to add a prefix and define where the images are kept.
		//so we call up in ""'s the folder name with a / and then concatenate
		image: "images/" + imageFiles[i]
	});
	//we also need to add out new image into the view
	view.add(thumb);
	viewContainer.add(view);
}

mainWin.add(border);
mainWin.add(viewContainer);
mainWin.open();