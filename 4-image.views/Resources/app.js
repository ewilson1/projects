var mainWin = Ti.UI.createWindow({
	backgroundColor: "#ffff",
	layout: "horizontal"
});

//whenever you want to create an actual image as content within your application there is a special object you can use
//to do that
//So, an imageView's main property is called 'image:' and this is the path to the image file you are trying to load.

//you have to instruct the application to look for the directory where the image is located. In this case, the "Resorces"
//file, which is located in the 'images' folder.

//so, before calling the actual image itself, you have to point it to the correct folder. The folder name is images

var newImage = Ti.UI.createImageView({
	image: "images/lightning1.jpg",
	left: 10,
	right: 10,
	top: 20,
	borderRadius: 10
});

//just like Views and Labels we are going to have to add these to a View or a Window

mainWin.add(newImage);
mainWin.open();