function View(args){
	return Ti.UI.createView(args);
}

function Window(args){
	return Ti.UI.createWindow(args);
}

function Label(args){
	return Ti.UI.createLabel(args);
}

function TextArea(args){
	return Ti.UI.createTextArea(args);
}

function TextField(args){
	return Ti.UI.createTextField(args);
}

function WebView(args){
	return Ti.UI.createWebView(args);
}

function Button(args, clickHandler){
	var button =  Ti.UI.createButton(args);
	button.addEventListener('click', clickHandler);
	return button;
}

function Toolbar(args){
	return Ti.UI.createToolbar(args);
}

function TabGroup(args){
	return Ti.UI.createTabGroup(args);
}

//BEGINNING OF TAB GROUP STUFF

function TabGroupWithColoredWindows() {
	
	
	//Create the first tab group and window
	var window = new Window({
		backgroundColor:'red',
		title:'Red'
	});
	
	var tab1 = Ti.UI.createTab({
		window:window,
		title:'red',
		icon:'KS_nav_ui.png'
	});
	
	//Create the second tab group and window
	var window2 = new Window({
		backgroundColor:'green',
		title:'Green'
	});
	
	var tab2 = Ti.UI.createTab({
		window:window2,
		title:'green',
		icon:'KS_nav_ui.png'
	});
	
	//Create the third tab group and window
	var window3 = new Window({
		backgroundColor:'blue',
		title:'Blue'
	});
	
	var tab3 = Ti.UI.createTab({
		window:window3,
		title:'blue',
		icon:'KS_nav_ui.png'
	});
	
	var tabGroup = Ti.UI.createTabGroup();
	tabGroup.addTab(tab1);
	tabGroup.addTab(tab2);
	tabGroup.addTab(tab3);
	
	return tabGroup;
	
}

//END OF TAB GROUP STUFF

//BEGINNING OF NAVIGATION VIEW STUFF

function WindowWithNavigation(args, navController){
	
	var window = new Window(args);
	navController.open(window);
	return window;
}

function MainWindow(navController){
	
	var mainWindow = new WindowWithNavigation({
		title:'First Window',
		backgroundColor:'yellow'
	}, navController);
	
	var button = new Button({
		width:100,
		height:100,
		title:'New Window'
	}, function(e) {
		var newWindow = SecondWindow(navController);
	});
	
	mainWindow.add(button);
	return MainWindow;
}

function SecondWindow(navController){
	
	var secondWindow = new WindowWithNavigation({
		title:'Second Window',
		backgroundColor:'green'
	}, navController);
	
	var button = new Button({
		width:100,
		height:100,
		title:'Third Window'
	}, function(e){
		var newWindow = ThirdWindow(navController);
	});
	
	secondWindow.add(button);
	return SecondWindow;
}

function ThirdWindow(navController){
	
	var thirdWindow = new WindowWithNavigation({
		title:'Third Window',
		backgroundColor:'blue'
	}, navController);
}

//END OF NAVIGATION GROUP STUFF

//make the functions visible outside the scope of this file.
exports.View = View;
exports.Window = Window;
exports.Label = Label;
exports.TextArea = TextArea;
exports.TextField = TextField;
exports.WebView = WebView;
exports.Button = Button;
exports.Toolbar = Toolbar;
exports.TabGroup = TabGroup;
exports.TabGroupWithColoredWindows = TabGroupWithColoredWindows;
exports.WindowWithNavigation = WindowWithNavigation;
exports.MainWindow = MainWindow;
exports.SecondWindow = SecondWindow;
exports.ThirdWindow = ThirdWindow;