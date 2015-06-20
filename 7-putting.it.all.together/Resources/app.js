
//There is a way to collect and look inside the file containing all the images; this would create an array for us that
//we can work with to do the same thing as having to type out all the images and calling if from an array we type out
//this method (below) is going to instruct Titanium to get a file or directory from our filesystem
//we have to start with our 'resources' folder inside of the ()'s
//then we have to instruct it to look inside the resourcesDirectory
//we can do this by adding a comma, and then ""'s the folder inside the resources directory
var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
//the next step is to get an array of all the files that are contained within the images folder
//so far the images folder variable is just looking at the folder itself, it hasn't gone in and collected the files
//within that folder. To do that we need another variable; and we are going to use the getDirectory listing method on 
//the images folder variable that we created above. So the images folder is once again is looking at the folder and 
//because that represents the folder we are going to get directory listing of that folder
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
		borderRadius: 20
	});
	//we are going to create an image view for each one of these views
	var thumb = Ti.UI.createImageView({
		//once again, we are using the 'image' property to call up the image
		//the images themselves are stored in the imageFiles array (up top), so we will use that
		//this will return the file names. Remember, our files are located inside a folder
		//called 'images'. So we need to add a prefix and define where the images are kept.
		//so we call up in ""'s the folder name with a / and then concatenate
		image: "images/" + imageFiles[i],
		//because the images are not filling the spaces, we are creating some scaleing to the 'thumb' Image view
		top: 0,
		width: view.width*2
		//so we are moving the image up to the top, and doubling its size (width)
		
	});
	//we also need to add our new image into the view
	view.add(thumb);
	viewContainer.add(view);
}

mainWin.add(border, header);
mainWin.add(viewContainer);
mainWin.add(closeButton);
mainWin.open();

