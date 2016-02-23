//Katherine Gershfeld

var c = document.getElementById("ftb2maga");
var ctx = c.getContext("2d");

//fill color
ctx.fillStyle = "#ff6666";
//draws rectangle
ctx.fillRect(0,0,538,538);

//fill color
ctx.fillStyle = "#330066";
//sets the font size and style
ctx.font = "30px arial";
//writes what at 240,400
ctx.fillText("what",240,400);

//stroke color
ctx.strokeStyle = "#ffffff"; 
//begins the drawing/polyline
ctx.beginPath();
//draws a curve centered on 272,390, radius 50, starting at angle 0 ending at angle 2pi
ctx.arc(272,390,50,0,2*Math.PI); 
//actually draws the outline of the curve
ctx.stroke();

var box = function box(color,sides,x,y) {
	ctx.fillStyle = color; //fill color
	ctx.beginPath(); //begins the drawing/polyline
	ctx.moveTo(x,y); //moves the reference point to x,y without drawing anything
	ctx.lineTo(x+sides,y); //draws a line to x+sides,y and moves reference point
	ctx.lineTo(x+sides,y+sides); //same
	ctx.lineTo(x,y+sides); //same
	ctx.closePath(); //draws a line from last reference point to the first one
	ctx.fill(); //actually displays the lines, filled with the fillStyle color
};

var bx = 0;
var by = 100;
var movebox = function movebox() { //draws concentric squares
	box("#5900b3",150,bx,by);
	box("#8000ff",130,bx+10,by+10);
	box("#9933ff",110,bx+20,by+20);
	box("#b366ff",90,bx+30,by+30);
	box("#cc99ff",70,bx+40,by+40);
	box("#e6ccff",50,bx+50,by+50);
	box("#ffffff",30,bx+60,by+60);
	bx+=10;
	if (bx>538) {
		bx=-150;
	}
};

var interval = setInterval(movebox,100); //repeat
