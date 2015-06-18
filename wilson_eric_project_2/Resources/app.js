Titanium.UI.setBackgroundColor("000");
var pHeight = Ti.Platform.displayCaps.platformHeight;
var statusBar = 20;
var win = Ti.UI.createWindow({
	title: "Family Tree",
	backgroundColor: "#dadada"
});
//JSON OBJECT
var family = {
		"Florida": {
			"title": "Heathrow",
			"footer": "Florida",
			"rows": [
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
	
		"New York": {
			"title": "Buffalo",
			"footer": "New York",
			"rows": [
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

var mainWindow = Ti.UI.createWindow({backgroundColor: "#f5f5f5"});

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

var titleLabel =Ti.UI.createLabel({
	text: "Michelle's Family",
	font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
	top: 30,
	width: "100%",
	textAlign: "center"
});

var people = Ti.UI.createTableView({
	top: border.top + border.height
});

if(Ti.Platform.name === "iPhone OS"){
	people.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

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


var getRowDetail = function(){
	var detailRowWindow = Ti.UI.createWindow({
		backgroundColor: "#f5f5f5"
	});
	var detailRowTitleView = Ti.UI.createView({
		height: 65,
		backgroundColor: "#fff",
		top: 0
	});
	
	var detailRowBorder = Ti.UI.createView({
		backgroundColor: "#dbdbdb",
		height: 1,
		top: detailTitleView.height + detailTitleView.top
	});
	
	var detailRowTitleLabel =Ti.UI.createLabel({
		text: this.title,
		font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
		top: 30,
		width: "100%",
		textAlign: "center"
	});
	
	var detailRowText = Ti.UI.createLabel({
		text: this.description,
		font: {fontSize: 14, fontFamily: "Arial"},
		top: detailBorder.height + detailBorder.top + 40,
		left: 10,
		right: 10
	});
	

		detailRowTitleView.add(detailRowTitleLabel);
		detailRowWindow.add(detailRowTitleView, detailRowBorder, detailRowText, detailTitleLabel);
};	

for(var i in family){
	for(var n in family[i]){
		if(n === "familyList"){
			if(a === "name"){
				for(var x=0, x=family[i][n][a].length; x++;){
					var theRow = Ti.UI.createTableViewRow;{
						title: family[i][n][a].name;
						desc = family[i][n][a].descripton;
						hasDetail = true;					
					}
				}
			}
		}
	}
};
						family.add(theRow);
						theRow.addEventListener("click", getRowDetail);


titleView.add(titleLabel);
mainWindow.add(titleView, border, people);
navWindow.open();