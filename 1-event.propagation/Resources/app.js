Titanium.UI.setBackgroundColor("000");

//Data
var family = [
{title: "Eric", descripton: "Eric is a superhuman known to his son as the Hulk. Michelle was unaware of this phenomenon at the start, but has come to like this version of Eric much better than the old name of Santa Claus."}, 
{title: "Aidan", descripton: "This miracle of life has been know to cause all kind of havoc, while at the same time holding a special place in Michelle's heart. He is 10 years old, but has an old soul that many have commented on as precious."},
{title: "Happy the dog", descripton:"This pain in the butt came home one day according to Aidan and is great with Adults. Around new people or especially kids, he is the spawn of Hell."}
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
	headerTitle: "Florida Family",
	footerTitle: "Not including Aunt Judy"
});

//dataSource is the same thing as the event.source found at the bottom.
//the dataSource is our row, which has a title and a description

var getDetail = function(dataSource){
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
		//make sure you pass dataSource in place of 'this'.title below, and anywhere we use 'this' replace it with 
		//dataSourcce instead
		text: dataSource.title,
		font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
		top: 30,
		width: "100%",
		textAlign: "center"
	});
	
	var detailText = Ti.UI.createLabel({
		//here is another place where dataSource is put in place of 'this' command.
		text: dataSource.desc,
		font: {fontSize: 14, fontFamily: "Arial"},
		top: detailBorder.height + detailBorder.top + 40,
		left: 10,
		right: 10
	});
	
	var closeButton = Ti.UI.createLabel({
		text: "Close Window",
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
	detailWindow.add(detailTitleView, detailBorder, detailText, closeButton);
	
	detailWindow.open();
	
};

for(var i=0, j=family.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: family[i].title,
		desc: family[i].descripton,
		hasChild: true
	});
	
	if(Ti.Platform.name === "iPhone OS"){
		theRow.hasChild = false;
		theRow.hasDetail = true;
	}
	
	
	familySection.add(theRow);
	//theRow.addEventListener("click", getDetail);

}

var familySections = [familySection];

people.setData(familySections);

//We have now created a smart event listener using a method call event propagation where the event listener 
//can determine what it is that we clicked on. Now that we have this information we go ahead and call out the get Detail function

people.addEventListener("click", function(event){
	getDetail(event.source);//make sure you go up and call the getDetail function and call it our data.source
	//console.log(event.source.title);
});

titleView.add(titleLabel);
mainWindow.add(titleView, border, people);
mainWindow.open();

// Conclusion: it runs the same, laods a new window with our data. It behaves the same way visually but if functions
//very differently. We are not adding eventlisteners to all of our rows anymore, we are using event propagation by
//having just one object listen for the event so we have only one event listener and it determines what object we 
//clicked on. By being able to do that we can pass that information into our function and then 'get' the information
//we need for all of our sections, for all of our 'title' and our 'description'
