function DetailView(data) {
 
    var win = Ti.UI.createWindow({
        backgroundColor:"yellow"
    });
 
    var lbl = Ti.UI.createLabel({
        text:'Name : '+data.title+'\nPrice : '+data.price,
        height:'auto',
        width:'auto',
        color:'#000'
    });
    win.add(lbl);
    return win;
};
 
module.exports = DetailView;