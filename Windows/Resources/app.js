Ti.UI.setBackgroundColor("#000");

var margin = 20;

var mainWindow = Ti.UI.createWindow({
	//Reserved Properties
	backgroundColor: "white",
	backgroundImage: "KS_nav_veiws.png",
	backgroundRepeat: true,
	title: "My First Window"
});

var myFirstView = Ti.UI.createView({
	backgroundColor: "#333",
	top: 20,
	bottom: 20,
	height: Ti.UI.SIZE
	
});

var myText = Ti.UI.createLabel({
	text: "Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!",
	color: "white",
	font: {fontSize: 14, fontFamily: "Helvetica", fontWeight: "Bold", fontStyle: "Italic"},
	top: 10,
	left: 10
	
});

mainWindow.add(myFirstView);
myFirstView.add(myText);
mainWindow.open();
