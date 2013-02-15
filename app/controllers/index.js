// ########################################
// $.drawermenu exposes 2 containers:
// 		$.drawermenu.drawermainview, $.drawermenu.drawermenuview
// and 3 methods
//		hidemenubutton, showmenubutton, showhidemenu
//

// attach event listener to hide detail view
var onCloseDetailClick=function(e){
	$.detailView.visible='false';
}

// ####################################
// ## ADD MAIN APP VIEW
// ####################################
var objAppMain=Alloy.createController('appmain');

// attach event listener to menu button
objAppMain.menuButton.addEventListener('click',function(){
	$.drawermenu.showhidemenu();
})

// attach event listener to table view
objAppMain.mainList.addEventListener('click',function(e){
	var rowTitle=e.rowData.rowTitle;
	var rowContent=e.rowData.rowContent;
	var rowDate=e.rowData.rowDate;
	
	$.storyTitle.text=rowTitle;
	$.storyDate.text=rowDate;
	$.storyContent.text=rowContent;
	
	$.detailView.visible='true';
	
})

// get a handle to the whole view and add it to the widget
var appMain=objAppMain.getView();
$.drawermenu.drawermainview.add(appMain);
//

// ####################################
// ## ADD MENU VIEW
// ####################################

// get OO reference to View
var objAppMenu=Alloy.createController('appmenu');

// get reference to TableView object within view
var objTableView=objAppMenu.menuList;

// create array for TableViewRows
var tableRows=[];

// ####################################
// add a couple menu items by hand
// ####################################

// get row template and send data to it.  See menulistrow.js controller for more info
var menuRow=Alloy.createController('menulistrow',{rowText:'Top Stories'}).getView();
tableRows.push(menuRow);

var menuRow=Alloy.createController('menulistrow',{rowText:'Settings'}).getView();
tableRows.push(menuRow);

var menuRow=Alloy.createController('menulistrow',{rowText:'Profile'}).getView();
tableRows.push(menuRow);

// set rows array as rows in the TableView
objTableView.data=tableRows;

// get handle to whole modified view and add it to the widget
$.drawermenu.drawermenuview.add(objAppMenu.getView());
//

// ####################################
// ## Set data from data-source
// ####################################

// create a data collection of models
var myData = Alloy.Collections.myModel;

// load data into from persistent storage into TableView
myData.fetch();

//
$.index.open();
//

//var common=require('common');
//common.loadData(myData);

$.index.addEventListener('close',function(){
	$.destroy();
})
