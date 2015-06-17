var win = Ti.UI.createWindow({
    backgroundColor : "gray"
});
 
var tbContView = Ti.UI.createView({
        backgroundColor:'white'
    });
 
var tableData = [{
    title : 'Apples',
    price : '1.25',
    hasChild : true,
    color : '#000'
}, {
    title : 'Grapes',
    price : '1.50',
    hasChild : true,
    color : '#000'
}, {
    title : 'Oranges',
    price : '2.50',
    hasChild : true,
    color : '#000'
}, {
    title : 'Bananas',
    price : '1.50',
    hasChild : true,
    color : '#000'
}, {
    title : 'Pears',
    price : '1.40',
    hasChild : true,
    color : '#000'
}, {
    title : 'Kiwis',
    price : '1.00',
    hasChild : true,
    color : '#000'
}];
 
var table = Ti.UI.createTableView({
    data : tableData
});
 
var nvWin = Ti.UI.iOS.createNavigationWindow({
    window:win
});
 
table.addEventListener('click', function(e) {
 
    var detailsView  = require("/DetailView");
 
    var detailView = new detailsView(e.rowData);
 
    nvWin.openWindow(detailView);
 
    setTimeout(function(){
        nvWin.closeWindow(detailView);
    },5000);
});
 
tbContView.add(table);
 
win.add(tbContView);
 
nvWin.open();

	
