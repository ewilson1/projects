
var valFamily = [{title: "Mom"}, {title: "Dad"}, {title: "Uncle Shark"}, {title: "Chris"}, {title: "Alex"}];
var family = [{title: "Eric"}, {title: "Aidan"}, {title: "Happy"}];
Titanium.UI.setBackgroundColor("#000");

var titleView = Ti.UI.createView({
	height: 65,
	backgroundColor: "#fff",
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor: "#dbdbdb",
	height: 1,
	top: titleView.height + titleView.top
});

var titleLabel = Ti.UI.createLabel({
	text: "Michelle Valiquette Wilson's Family",
	font: {fontSize: 15, fontFamily: "Arial", fontWeight: "bold"},
	top: 30,
	width: "100%",
	textAlign: "center"
});

var people = Ti.UI.createTableView({
	top: border.top + border.height
});

//Note for iOS use only, not for Android use
if(Ti.Platform.name === "iPhone OS"){
	people.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var familySection = Ti.UI.createTableViewSection({
	headerTitle: "Michelle's Immediate Family",
	footerTitle: "Those who live with her"
});

var valFamilySection = Ti.UI.createTableViewSection({
	headerTitle: "Michelle's Birth Family",
	footerTitle: "Those she grew up with"
});

//Need to create a loop
for(var i=0, j=family.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: family[i].title
	});
	familySection.add(theRow);
}

for(var i=0, j=valFamily.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: valFamily[i].title
	});
	valFamilySection.add(theRow);
}

var famSections = [familySection, valFamilySection];

people.setData(famSections);

table.setData(tableSections);
titleView.add(titleLabel);
mainWindow.add(titleView, border, people);
mainWindow.open();


-----

//var pHeight = Ti.Platform.displayCaps.platformHeight;
//var statusBar = 20;
//Titanium.UI.setBackgroundColor("#000");
//WINDOW

var win = Ti.UI.createWindow({backgroundColor: "#fff"});

var titleView = Ti.UI.createView({
	height: 65,
	backgroundColor: "#fff",
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor: "#dbdbdb",
	height: 1,
	top: titleView.height + titleView.top
});

var titleLabel = Ti.UI.createLabel({
	text: "Michelle Valiquette Wilson's Family",
	font: {fontSize: 15, fontFamily: "Arial", fontWeight: "bold"},
	top: 30,
	width: "100%",
	textAlign: "center"
});

//Data

var data ={
	"Michelle's Immediate Family": [
		{"name": "Aidan"}, 
		{"name": "Eric"}, 
		{"name": "Einstein"}, 
		{"name": "Happy"},
	],
	"Michelle's Birth Family": [
		{"name": "Mom"}, 
		{"name": "Dad"}, 
		{"name": "Glen"}, 
		{"name": "Chris"},
	],
};


//CUSTOM TABLE HEADER
var tableHeader = Ti.UI.createView({
	height: 50,
	backgroundColor: ("#3c78b4"),
});
var headerText = Ti.UI.createLabel({
	text: "Michelle's Family Tree",
	font: {fontSize: 22, fontWeight: "bold"},
	color: "#fff"
});
tableHeader.add(headerText);

//TABLE
var table = Ti.UI.createTableView([
	top = tableHeader +20,
	style = Ti.UI.iPhone.TableViewStyle.GROUPED,
	headerView = tableHeader,
]);

//SECTIONS AND ROWS
var tableSections =[];
for(n in data){
	//CUSTOM HEADER
var customHeader = Ti.UI.createView({
		height: 30,
		backgroundColor: "#878787",
	});
var chText = Ti.UI.createLabel({
		text: n.toUpperCase(),
		font: {fontSize: "16", fontWeight: "bold"},
		color: "#fff",
		left: 18,
	});
customHeader.add(chText);
	
	//CUSTOM FOOTER
var customFooter = Ti.UI.createView({
		height: 50,
		backgroundColor: "#efeff4"
	});
var cfText = Ti.UI.createView({
		text: "Those she lives with now",
		font: {fontSize: 12},
		color: "#aaa",
		left: 18,
		top: 4
});
customFooter.add(cfText);
	
var section = Ti.UI.createTableViewSection({
		footerTitle: n,
		//headerView: customHeader,
		footerTitle: "Those she lives with now",
		//footerView: customFooter,
	});
for(var i=0, j=data[n].length; i<j; i++){
		var row = Ti.UI.createTableViewRow({
			title: data[n][i].name,
			hasChild: true,
		});
		section.add(row);
	}
tableSections.push(section);
}

//DISPLAY
table.setData(tableSections);
win.add(table);
win.open();