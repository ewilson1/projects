Titanium.UI.setBackgroundImage; "Weather-Background.jpg";

//Data for the table view
var menu = [{title: "Random Weather Images"}, {title: "The Weatherman's Family"}, {title: "Interactive Weather"}];

var mainWindow = Ti.UI.createWindow({
	title: "Eric Wilson's Weather",
		
});
	var navWindow = Ti.UI.iOS.createNavigationWindow({
		window: mainWindow,
		
	});

var weatherTable = Ti.UI.createTableView({
	top: navWindow.height + navWindow.top,
	backgroundImage: "Weather-Background.jpg"
});

if(Ti.Platform.name === "iPhone OS"){
	weatherTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};

weatherTable.setData(menu);

mainWindow.add(weatherTable);
mainWindow.open();
navWindow.open();