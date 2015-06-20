//declare a variable to run a function, then another variable for the window
var weatherPage = function(){
	var weatherWindow = Ti.UI.createWindow({
		title: "Weather"
	});
	weatherWindow.add(viewContainer);
	//don't forget to call the navigation window from the first page and load the new variable window name
	navWindow.openWindow(weatherWindow);
};

//add event listener here, there will be another event listener at the bottom of the page
openView.addEventListener("click", weatherPage);

var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imagesFolder.getDirectoryListing();


var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var rowCount = 3;
var margin = 10;
var trueCanvasWidth = (pWidth - margin*5);
var size = (trueCanvasWidth/4);

var viewContainer = Ti.UI.createScrollView({
	top: 0,
	layout: "horizontal",
	width: pWidth,
	contentWidth: pWidth,
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
};
//this is where you add the second event listener for the 3rd .js file, in this case the FullScreen.js file
viewContainer.addEventListener("click", pictures.dostuff);
