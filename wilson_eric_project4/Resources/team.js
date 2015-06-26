//declare a variable to run a function, then another variable for the window
var teamPage = function(){
	var teamWindow = Ti.UI.createWindow({
		title: "Weather Team",
	});
	teamWindow.add(bgImage);
	//don't forget to call the navigation window from the first page and load the new variable window name
	navWindow.openWindow(teamWindow);
};

//add event listener here, there will be another event listener at the bottom of the page
openView1.addEventListener("click", teamPage);

//set the parameters for the background page
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var bgImage = Ti.UI.createImageView({
	image: "Weather-Background.jpg",
	width: pWidth,
	height: pHeight
});
var wxCustom = require("custom");


//JSON Data
var family = [
	{title: "Michelle", 
	descripton:"Known to everyone simply as the one who can do it all, she is by default...WonderWoman. She is the PTA President 4 years running, the Regional Co-ordinator of the entire SouthEast Region for MOMs Club. Without a doubt, the world's most amazing person. I might be just a little bias, but she really is awesome.",
	image: "Wonder_Woman.png"
	},
	
	
	{title: "Eric", 
	descripton: "Eric is a superhuman known to his son as the Hulk. Michelle was unaware of this phenomenon at the start, but has come to like this version of Eric much better than the old name of Santa Claus.",
	image: "Hulk.png" 
	}, 
	
	{title: "Aidan", 
	descripton: "This miracle of life has been know to cause all kind of havoc, while at the same time holding a special place in Michelle's heart. He is 10 years old, but has an old soul that many have commented on as precious.",
	image: "Captain_America.png"
	},
	
];	

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#f5f5f5"
});

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

var familySection = Ti.UI.createTableViewSection({
	headerTitle: "American Weather Team",
	footerTitle: "Not including the dog who is not a super-hero."
});

var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#f5f5f5"
	});
	var detailTitleView = Ti.UI.createView({
		height: 65,
		backgroundColor: "#fff",
		top: 0
	});
	
	var detailBorder = Ti.UI.createView({
		backgroundColor: "#dbdbdb",
		height: 1,
		top: detailTitleView.height + detailTitleView.top
	});
	
	var detailTitleLabel =Ti.UI.createLabel({
		text: this.title,
		font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
		top: 30,
		width: "100%",
		textAlign: "center"
	});
	
	var detailText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize: 14, fontFamily: "Arial"},
		top: detailBorder.height + detailBorder.top + 40,
		right: 10
	});
	
	var detailImage = Ti.UI.createImageView({
		image: this.image,
		left: 10,
		top: 50,
	});
	
	var closeButton = Ti.UI.createLabel({
		backgroundColor: "333",
		color: "fff",
		height: 50,
		font: {fontSize: 12, fontFamily: "Arial"},
		width: "100%",
		bottom: 0,
		textAlign: "center",
	});
	
	var closeWindow = function(){
		detailWindow.close();
	};
	
	closeButton.addEventListener("click", closeWindow);
	
	detailTitleView.add(detailTitleLabel);
	detailWindow.add(detailTitleView, detailBorder, detailText, detailImage, closeButton);
	
	detailWindow.open();
	
};

for(var i=0, j=family.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: family[i].title,
		desc: family[i].descripton,
		image: family[i].image,
		hasChild: true
	});
	
	if(Ti.Platform.name === "iPhone OS"){
		theRow.hasChild = false;
		theRow.hasDetail = true;
	}
	
	
	familySection.add(theRow);
	theRow.addEventListener("click", getDetail);

}

var familySections = [familySection];

people.setData(familySections);

titleView.add(titleLabel);

mainWindow.add(titleView, border, people);

mainWindow.open();