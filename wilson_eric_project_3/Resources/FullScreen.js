
var bigPic = function(event){
	var wxPic = Ti.UI.createWindow({
		backgroundImage: "Weather-Background.jpg",
		title: event.source.image
	});
	navWindow.openWindow(wxPic);
	var wx = Ti.UI.createImageView({
		image: event.source.image
	});
	wxPic.add(wx);
};

exports.dostuff = bigPic;


