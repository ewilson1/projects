var pHeight = Ti.Platform.displayCaps.platformHeight;
var statusBar = 20;

//DATA
var data ={
	"Her Family":[
	{"name": "Eric"},
	{"name": "Aidan"},
	{"name": "Happy"},		
	],
};

//WINDOW
var win = Ti.UI.createWindow({backgroundColor: "#fff"});

//CUSTOM TABLE HEADER
var tableHeader = Ti.UI.createView({
	height: 50,
	backgroundColor: "#3c78b4",
});
var headerText = Ti.UI.createLabel({
	text: "Michelle Valiquette Wilson",
	font: {fontSize: 22, fontWieght: "bold"},
	color: "#fff"
});
tableHeader.add(headerText);

//TABLE
var table = Ti.UI.createTableView({
	height: pHeight - statusBar,
	top: statusBar,
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	headerView: tableHeader,
});

//SECTIONS & ROWS
 var tableSections =[];
 //for loop
 for(name in data){
 	//CUSTOM HEADER for the ARRAYS, not the header for the page!
 	var customHeader = Ti.UI.createView({
 		height: 30,
 		backgroundColor: "878787",
 	});
 	var chText = Ti.UI.createLabel({
 		text: "Her Family",
 		font: {fontSize: 16, fontWeight: "bold"},
 		color: "#fff",
 		left: 18,
 	});
 	customHeader.add(chText);
 	
 	//CUSTOM FOOTER
 	var customFooter = Ti.UI.createView({
 		height: 50,
 		backgroundColor: "#efeff4",
 	});
 	var cfText = Ti.UI.createLabel({
 		text: "Not Including Parents, Brothers, Aunts and Uncles",
 		font: {fontSize: 12},
 		color: "aaa",
 		left: 18,
 		top: 4
 	});
 	customFooter.add(cfText);
 	
 	var section = Ti.UI.createTableViewSection({
 		headerView: customHeader,
 		footerView: customFooter,
 	});
 	
//Define Function
var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "3c78b4"
	});
	
	var detailCustomHeader = Ti.UI.createView({
 		height: 30,
 		backgroundColor: "878787",
 	});
 	var detailChText = Ti.UI.createLabel({
 		text: this.title,
 		font: {fontSize: 16, fontWeight: "bold"},
 		color: "#fff",
 		left: 18,
 	});
 	
 	detailWindow.add(detailWindow, detailCustomHeader, detailChText);
 	detailWindow.open();
 };
 	
 	
 	//for loop
 	for(var i=0, j=data[name].length; i<j; i++){
 		var row = Ti.UI.createTableViewRow({
 			title: data[name][i].name,
 			hasDetail: true,
 		});
 		section.add(row);
 		row.addEventListener("click", getDetail);
 	}
 	tableSections.push(section);
 }


//DISPLAY

table.setData(tableSections);
win.add(table);
win.open();