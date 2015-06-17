var win = Ti.UI.createWindow({
	backgroundColor: "#f2f2f2",
	layout: "vertical"
});

//collection of images
var myImages = ["Space-Beer.jpg", "Space3.jpg"];

var folder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "imgs");
var myImages = folder.getDirectoryListing();

console.log(folder);

for(var i=0; i<myImages.length; i++){
	var theImage = Ti.UI.createImageView({
		image: "imgs/" + myImages[i],
		width: "50%"
	});
	win.add(theImage);
	
};


win.open();

	
