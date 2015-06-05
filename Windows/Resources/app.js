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
	//borderColor: "Pink"
	//borderRadius: 5,
	//borderWidth: 1,
	height: 250,
	top: 20,
	left: 20,
	right: 20,
	zIndex: 0,
	//These are custom properties
	id: "Header",	
	cost: "$40"
	
});

var mySecondView = Ti.UI.createView({
	backgroundColor: "red",
	height: 100,
	top: myFirstView.top + myFirstView.height + margin,
	left: 20,
	right: 20,
	zIndex: 1
});

mainWindow.add(myFirstView, mySecondView);
mainWindow.open();
