//again, call a variable to create a function, then another variable within the function, in this case wxPic
var bigPic = function(event){
	var wxPic = Ti.UI.createWindow({
		backgroundImage: "Weather-Background.jpg",
		title: event.source.image
	});
	//don't forget to activate (remind) the code to call up the navigation window, this time for wxPic
	navWindow.openWindow(wxPic);
	var wx = Ti.UI.createImageView({
		image: event.source.image//this was covered in the GoToMeeting on Monday. The image lives within an object/source.
		//remember the event created above was intended for this purpose, to give you a starting folder to drill down to your picture
	});
	wxPic.add(wx);
};
//using exports you are allowed to go backwards with your code. Without exports, you need to define your variables before
//you get to this point. Exports allow you to overcome the constraints of not being allowed to move backward between .js files
exports.dostuff = bigPic;


