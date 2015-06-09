var pHeight = Ti.Platform.displayCaps.platformHeight;
var statusBar = 20;

//DATA
var data ={
	"Who She lives with now...":[
	{"name": "Eric"},
	{"name": "Aidan"},
	{"name": "Happy"},		
	
],
	"Who She lived with growing up...":[
	{"name": "Mom"},
	{"name": "Dad"},
	{"name": "Glen and Chris"},		
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
	text: "Michelle's Family Tree",
	font: {fontSize: 22, fontWieght: "bold"},
	color: "#fff"
});
tableHeader.add(headerText);

//TABLE
var table = Ti.UI.createTableView({
	height: pHeight - statusBar,
	top: statusBar,
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	//headerTitle: "Michelle's Family Tree",
	headerView: tableHeader,
});

//SECTIONS & ROWS
 var tableSections =[];
 for(n in data){
 	//CUSTOM HEADER for the ARRAYS, not the header for the page!
 	var customHeader = Ti.UI.createView({
 		height: 30,
 		backgroundColor: "878787",
 	});
 	var chText = Ti.UI.createLabel({
 		text: n.toUpperCase(),
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
 		text: "Not including Aunts and Uncles",
 		font: {fontSize: 12},
 		color: "aaa",
 		left: 18,
 		top: 4
 	});
 	customFooter.add(cfText);
 	
 	var section = Ti.UI.createTableViewSection({
 		//headerTitle: n,
 		headerView: customHeader,
 		//footerTitle: "As far as we know, there could be more.",
 		footerView: customFooter,
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
