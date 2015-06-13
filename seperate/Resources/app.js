Titanium.UI.setBackgroundColor("000");
var pHeight = Ti.Platform.displayCaps.platformHeight;
var statusBar = 20;
var win = Ti.UI.createWindow({
	title: "Family Tree",
	backgroundColor: "#dadada"
});

 	for(var i=0, j=data[name].length; i<j; i++){
 		var row = Ti.UI.createTableViewRow({
 			title: data[name][i].name,
 			hasDetail: true,
 		});
 		section.add(row);
 		row.addEventListener("click", getDetail);
 	}
 	tableSections.push(section);
//JSON OBJECT
var family = 	{
	"florida": 	{
		"theTitle": "Heathrow, Florida",
		"familyList": [
				{
					"name": "Eric",
					"description": "Eric is a superhuman known to his son as the Hulk. Michelle was unaware of this phenomenon at the start, but has come to like this version of Eric much better than the old name of Santa Claus."
				},
				{
					"name": "Aidan",
					"description": "This miracle of life has been know to cause all kind of havoc, while at the same time holding a special place in Michelle's heart. He is 10 years old, but has an old soul that many have commented on as precious."
				},
				{
					"name": "Happy, the dog",
					"description": "This pain in the butt came home one day according to Aidan and is only good for eating poop and costing money. With Adults he is a spaz and around kids, he is the spawn of Hell."
				},
			]	
	},
	"newYork":  {
		"theTitle": "Buffalo, New York",
		"familyList":  [
				{
					"name": "Mom",
					"description": "A loving Mother of three children at a young age. She had three kids all under the age of 5 at one time which can be hard for a stay at home Parent. She raised them with a strong sense of purity of heart, faith in God and to treat others as they would have them treat themselves."
				},
				{
					"name": "Dad",
					"description": "A hard working Blue Collar worker who rarely saw his children working the overnight shift, then day jobs in order to provide for his family. Yet, still found the time to be involved with this children by coaching their Little League games and attending any event they were involved in. This meant sacrificing sleep, but he knew in the end he would never have the same opportunity to see them play."
										
				},
				{
					"name": "Chris and Glen",
					"description": "Glen, 2 years older than Michelle, and Chris, 2 years younger, both have their unique stories to tell. What binds them together is Love and respect and a huge commitment to Family."
				}		
			]
	},
};

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

 		footerView: customFooter,
 	});
 	
 	
//CREATE A TABLE VIEW FOR THE CUSTOM HEADER
var table = Ti.UI.createTableView({
	height: pHeight - statusBar,
	top: statusBar,
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	headerView: tableHeader
});

win.add(table);


var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: win
});

var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		title: this.text,
		backgroundColor: "fff"
	});
	var detailText = Ti.UI.createLabel({
		text: this.details,
		top: 30,
		left: 15,
		right: 15,
	});
	detailWindow.add(detailText);
	navWindow.openWindow(detailWindow);
};

var makeUI = function(){
	var spacing = 80;
	for(n in family){
		var titleLabel = Ti.UI.createLabel({
			text: family[n].theTitle,
			left: 15,
			right: 15,
			top: spacing,
			height: 25,
			backgroundColor: "3333",
			font: {fontSize: 22, fontFamily: "Veranda"},
			color: "#fafafa"
		});
		spacing = titleLabel.top + titleLabel.height +10;
		console.log(spacing);
		for(m in family[n].familyList){
			var itemLabel = Ti.UI.createLabel({
				text: family[n].familyList[m].name,
				details: family[n].familyList[m].description,
				left: 30,
				right: 15,
				top: spacing,
				height: 25,
				backgroundColor: "#fff",
				font: {fontSize: 22, fontFamily: "Arial"},
				color: "#333",
				
			});
			
			win.add(itemLabel);
			spacing = itemLabel.top + itemLabel.height + 10;
			itemLabel.addEventListener("click", getDetail);
		}
		win.add(titleLabel);
		spacing = itemLabel.top + itemLabel.height + 40;
	}
	
};

makeUI();

navWindow.open();