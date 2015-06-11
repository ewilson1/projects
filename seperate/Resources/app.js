var pHeight = Ti.Platform.displayCaps.platformHeight;
var statusBar = 20;

var win = Ti.UI.createWindow({backgroundColor: "#fff"});

//DESCRIPTION CUSTOM TABLE HEADER
var descTableHeader = Ti.UI.createView({
	height: 50,
	backgroundColor: "#3c78b4",
});
var descHeaderText = Ti.UI.createLabel({
	text: "Michelle Valiquette Wilson",
	font: {fontSize: 22, fontWieght: "bold"},
	color: "#fff"
});
descTableHeader.add(descHeaderText);

//DESCRIPTION TABLE
var descTable = Ti.UI.createTableView({
	height: pHeight - statusBar,
	top: statusBar,
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	headerView: descTableHeader,
});

win.add(descTable);
win.open();
