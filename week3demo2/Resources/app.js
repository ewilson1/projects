var imageSrc = [
"http://www.nasa.gov/images/content/125609main_iss010e19144_hi.jpg",
"http://www.astronomos.gr/wp-content/uploads/2015/03/clouds-outer-space-stars-galaxies-planets-moon-earth-shadows-eclipse-milky-way-solar-eclipse-photoma_www.wallpaperfo.com_15.jpg",
"http://www.wallpaperfly.com/thumbnails/detail/20120924/earth%20space%20colors%201920x1080%20wallpaper_www.wallmay.net_45.jpg"
];

var counter = 0;
var change;
var status;

var win = Ti.UI.createWindow();
var theImage = Ti.UI.createImageView({
	image: imageSrc[0]
});

win.open();

var changeImage = function(){
	if(counter === imageSrc.length-1){
		counter = 0;
		theImage.image = imageSrc[0];
	}else{
		counter++;
		theImage.image = imageSrc[counter];
	}
	console.log (theImage.image);
};

var start = function(){
	alert("Images Started!");
	change = setInterval(changeImage, 1500);
	status = "start";
};

var stop = function(){
	alert("Images Stopped!");
	clearInterval(change);
	status = "stop";
};

var toggle = function(){
	if(status === "stop"){
		start();
	}else{
		stop();
	}
};

win.add(theImage);
win.addEventListener("click", toggle);
start();
