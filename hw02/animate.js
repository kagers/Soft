// Katherine Gershfeld

var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var b = document.getElementById("clear");

var r = 1;
var growing = true;

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
    window.requestAnimationFrame(anime); // repeat
};

b.addEventListener("click",anime); // button triggers animation
