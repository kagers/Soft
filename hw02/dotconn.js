// Katherine Gershfeld

var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var b = document.getElementById("clear");

var x=-1;
var y=-1;

var clr = function clr(e) {
    x=-1;
    y=-1;
    ctx.clearRect(0,0,538,538); // clears everything in the canvas
};


var plot = function plot(e) {
    ctx.fillStyle = "red";
    ctx.strokeStyle = "black";
    if (x>0 && y>0) { // if not the first circle
	ctx.beginPath();
	ctx.moveTo(x,y); // moves reference to last click location
	ctx.lineTo(window.event.clientX,window.event.clientY); // line to current click
	ctx.stroke(); // draws the line
    }
    ctx.beginPath(); // new path
    ctx.arc(window.event.clientX,window.event.clientY,10,0,2*Math.PI); // circle at click
    ctx.stroke(); // draws the line
    ctx.fill(); // draws the circle
    x=window.event.clientX; // stores coords to use for the next click
    y=window.event.clientY;
};
 
b.addEventListener("click",clr); 
c.addEventListener("click",plot);
