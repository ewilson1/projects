//declare a variable to run a function, then another variable for the window
var teamPage = function(){
	var teamWindow = Ti.UI.createWindow({
		title: "Weather Team",
	});
	//don't forget to call the navigation window from the first page and load the new variable window name
	navWindow.openWindow(teamWindow);

//Start building the platform to meet the requirements of this page

	//JSON Data
	var family = [
		{title: "Michelle", 
		descripton:"Known to everyone simply as the one who can do it all, she is by default...WonderWoman. She is the PTA President 4 years running, the Regional Co-ordinator of the entire SouthEast Region for MOMs Club. Without a doubt, the world's most amazing person. I might be just a little bias, but she really is awesome.",
		image: "Wonderwoman.png"
		},
		
		
		{title: "Eric", 
		descripton: "Eric is a superhuman known to his son as the Hulk. Michelle was unaware of this phenomenon at the start, but has come to like this version of Eric much better than the old name of Santa Claus.",
		image: "hulk.png" 
		}, 
		
		{title: "Aidan", 
		descripton: "This miracle of life has been know to cause all kind of havoc, while at the same time holding a special place in our hearts. He is 10 years old, but has an old soul that many have commented on as precious. But don't be fooled, this Super-Hero is always watching for trouble...and if he's not in it, then he calls others out in their defense.",
		image: "captain_america.png"
		},
		//close the array
		];	
		//create a Table View to place the JSON data in
			var people = Ti.UI.createTableView({
				backgroundImage: "Weather-Background.jpg"
			});
			
			if(Ti.Platform.name === "iPhone OS"){
				people.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
			}
			
			var familySection = Ti.UI.createTableViewSection({
				headerTitle: "The Wilson Weather Team",
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
						right: 25,
						left: 25,
					});
					var picView = Ti.UI.createImageView({
						height: detailTitleView.top + detailTitleView.height + 250,
						top: 300
					});
					var detailImage = Ti.UI.createImageView({
						image: this.image,
						bottom: 0,
					});
					var closeButton = Ti.UI.createLabel({
						backgroundColor: "blue",
						text: "Click to go back to the team",
						color: "fff",
						height: 50,
						font: {fontSize: 20, fontFamily: "Arial"},
						width: "100%",
						bottom: 0,
						textAlign: "center",
					});
					var closeWindow = function(){
						//add some animation to the open and close features
						detailWindow.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
						};
						//put an Event Listener to the close button
						closeButton.addEventListener("click", closeWindow);
						//add the images, details and dimentions of the detail Window
						picView.add(detailImage);
						detailTitleView.add(detailTitleLabel);
						detailWindow.add(detailTitleView, detailBorder, detailText, picView, closeButton);
						//finish with more animation to the open feature on the TableViewRow
						detailWindow.open({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
						};
					
		for(var i=0, j=family.length; i<j; i++){
			var theRow = Ti.UI.createTableViewRow({
				title: family[i].title,
				desc: family[i].descripton,
				image: family[i].image,
				hasDetail: true
			});
		
		//add the section to the row
		familySection.add(theRow);
		//add an Event Listener to the getDetail function
		theRow.addEventListener("click", getDetail);
	}
	//build the variable for the array
	var familySections = [familySection];
	//set the data to the array
	people.setData(familySections);
	//add the variable to the window
	teamWindow.add(people);
	//open the window inside the context of the entire function
	navWindow.openWindow(teamWindow);	
//close out the entire function from above
};
//require the next page
var lastPage = require("custom");
//open the page by putting an event listener to the Weather team button from the menu
openView1.addEventListener("click", teamPage);