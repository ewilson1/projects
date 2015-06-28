//declare a variable to run a function, then another variable for the window
var weatherPage = function(){
	var weatherWindow = Ti.UI.createWindow({
		title: "Weather Gallery",
		backgroundImage: "Weather-Background.jpg"
	});
	//weatherWindow.add(bgImage);
	//don't forget to call the navigation window from the first page and load the new variable window name
	navWindow.openWindow(weatherWindow);
	
	//create the view for the Next button
	var buttonViewNext = Ti.UI.createView({
		backgroundColor: "#23ba00",
		width: 100,
		height: 50,
		top: 20,
		borderRadius: 5
	});
	
	//create the text for the Next button
	var buttonTextNext = Ti.UI.createLabel({
		color: "#fff",
		font: {fontSize: 16, fontFamily: "Arial"},
		textAlign: "center",
		text: "Next Image"	
	});
	//add the text to the view for the Next button
	buttonViewNext.add(buttonTextNext);
	
	//add the Next button to the wxView view
	weatherWindow.add(buttonViewNext);

	//create a variable to perform a method to get to the images folder
	var wxFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
	//below is the array we are calling the images from
	var wxPics = wxFolder.getDirectoryListing();
	console.log(wxPics);
		
		var forward = function(){
				var wxHolder = Ti.UI.createView({
				backgroundColor: "#blue",
				top: buttonViewNext.top + buttonViewNext.height + 30,
				borderRadius: 7,
				height: 300
			});
				//create a variable that will randomly select from the array of pictures in the images folder
				var i = Math.floor((Math.random()*6));
				console.log(i);//notice how the console shows the number of the image in the array, and how its random
				var pics = Ti.UI.createImageView({
				image: "images/" + wxPics[i],
				width: "auto",
				height: "auto"
			});
			//add the image view variable to the view variable	
			wxHolder.add(pics);
			weatherWindow.add(wxHolder);
			//close the forward function
			};
			//add the Event listener to the to the next button
			buttonViewNext.addEventListener("click", forward);
		};	

		
//add event listener here to open the page from the Weather Gallery button from the menu page
openView.addEventListener("click", weatherPage);
//require the next .js page
var wxTeam = require("team");
//open the main window
navWindow.open();