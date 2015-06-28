//declare a variable to run a function, then another variable for the window
var customPage = function(){
	var customWindow = Ti.UI.createWindow({
		title: "Weather Terminology",
		backgroundImage: "Weather-Background.jpg"
	});
	//don't forget to call the navigation window from the first page and load the new variable window name
	//navWindow.openWindow(customWindow);

	//Start building the platform to meet the requirements of this page
	var openText = Ti.UI.createLabel({
		text: "Your personal Weather dictionary",
		top: 50,
		color: "white",
		textAlign: "center",
		font: {fontSize: 20, fontfamily: "Arial"},
	});
	//This was found during my research. I downloaded the New Oxford Dictionary, then connected it to the searh "Text Area"
	var textarea = Ti.UI.createTextArea({
	    borderColor : '#000',
	    color : '#000',
	    keyboardToolbarColor : '#999',
	    keyboardToolbarHeight : 40,
	    value : "Search Weather Terms Here. Highlight the term or word, then hit define to get the definition. For example put your clicker on this word - Weather - double click on it, then selet define. Or erase everything, put your own word in, click on it and select define",
	    top : 100,
	    width : 300, 
	    height : 120
	});
	//This is very important. In order to stay within the Navigation of the app, the user must not select SEARCH WEB. This will take them away from the app and they won't be able to navigate back to the menu.
	var openText2 = Ti.UI.createLabel({
		text: "Warning! Do not select SEARCH WEB. This will take you away from the navigation page. Hit the DICTIONARY button to load the New Oxford English Dictionary definition. Hit the DONE button in the upper right hand corner to return to this page",
		top: 250,
		color: "white",
		textAlign: "center",
		font: {fontSize: 15, fontfamily: "Arial"},
		width: 275
	});
	
//ass the items above to the window
customWindow.add(openText, openText2, textarea);
//open the custom window using the navWindow.openWindow function
navWindow.openWindow(customWindow);

//close out the function
};
//add the event listener to the Weather Terminology button from the main menu
openView2.addEventListener("click", customPage);
