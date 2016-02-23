// Katherine Gershfeld

var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var start = document.getElementById("start");
var stop  = document.getElementById("stop");
var dvd   = document.getElementById("dvd");

var r = 1;
var growing = true;
var requestID;

var x = 0;
var y = 0;

var logo = new Image();
logo.src = "logo_dvd.jpg";

var clr = function clr() {
    ctx.clearRect(0,0,538,538); // clears everything in the canvas
};

var anime = function anime(e) {
    clr();
    ctx.fillStyle = "red";
    ctx.beginPath(); // new path
    ctx.arc(269,269,r,0,2*Math.PI); // circle at center
    ctx.fill(); // draws the circle
    if (growing) {
	r++;
    } else {
        r--;
    }
    if (r <= 0) {
	growing = true;
    } else if (r > 269) {
        growing = false;
    }
    requestID = window.requestAnimationFrame(anime); // repeat
};

var no = function no() {
    //console.log(requestID);
    window.cancelAnimationFrame(requestID);
}

var screensave = function screensave() {
    no();
    ctx.clearRect(0,0,538,538);
    ctx.drawImage(logo,x,y,logo.width/2,logo.height/2);
}

start.addEventListener("click", anime); // button triggers animation
stop.addEventListener("click", no); // button stops animation
dvd.addEventListener("click", screensave); // button dvds animation
