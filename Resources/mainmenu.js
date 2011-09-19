//Set the background colour to a light grey.
Titanium.UI.setBackgroundColor('#777');
//Create the window that the buttons will go into.
var window = Titanium.UI.createWindow();


//Create the buttons
//TODO: Add the click event handlers when the other views have been created.
var button1 = Titanium.UI.createButton({
	tite:'Home',
	backgroundImage:('../images/home.jpg'),
	width:100,
	height:100,
	top:105,
	left:25	
});

var button2 = Titanium.UI.createButton({
	tite:'location',
	backgroundImage:('../images/location.jpg'),
	width:100,
	height:100,
	top:105,
	right:25	
});

var button3 = Titanium.UI.createButton({
	tite:'Attraction Information',
	backgroundImage:('../images/information.jpg'),
	width:100,
	height:100,
	top:250,
	left:25	
});

var button4 = Titanium.UI.createButton({
	tite:'About Us',
	backgroundImage:('../images/about.jpg'),
	width:100,
	height:100,
	top:250,
	right:25	
});

//Add the labels for going underneath the buttons.
var label1 = Titanium.UI.createLabel({
    text:'Home',
    height:'auto',
    width:'auto',
    color:'#900',
    font:{fontSize:15},
    textAlign:'center',
    top:205,
    left:45
});

var label2 = Titanium.UI.createLabel({
    text:'Where am I?',
    height:'auto',
    width:'auto',
    color:'#900',
    font:{fontSize:15},
    textAlign:'center',
    top:205,
    right:35
});

var label3 = Titanium.UI.createLabel({
    text:'Exhibit Information',
    height:'auto',
    width:'auto',
    color:'#900',
    font:{fontSize:15},
    textAlign:'center',
    top:355,
    left:20
});

var label4 = Titanium.UI.createLabel({
    text:'About St. Fagans',
    height:'auto',
    width:'auto',
    color:'#900',
    font:{fontSize:15},
    textAlign:'center',
    top:355,
    right:25
});



window.add(button1);
window.add(button2);
window.add(button3);
window.add(button4);
window.add(label1);
window.add(label2);
window.add(label3);
window.add(label4);
window.open();
