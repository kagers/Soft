var base = "this is in f1 in the global namespace";

var x = "x is in the global namespace";

var f2 = function() {
    console.log("this is f2");
};

var f1 = {
    x : "something in the f1 namespace",
    f2 : f2,
    f : function() {
	console.log("this is in f in the f1 namespace");
	console.log("x is "+x);
	console.log("f1.x is "+f1.x);
	console.log("better way "+this.x);
    }
};

var makeIncrementer = function() {
    var x = 0;
    return function() {
	x+=1;
	return x;
    };
};

var inc = makeIncrementer();

var makeAdder = function(n) {
    return function(x) {
	return x+n;
    };
};

var makeCounter = function() {
    var i=0;
    var set  = function(x) { i=x; };
    var get  = function(x) { return i; };
    var inc  = function()  { i++; };
    var dec  = function()  { i--; };
    var getx = function()  { return x; };
    var setx = function(n) { this.x = n; };

    return {
	x: "this is a str in dict",
	set: set,
	get: get,
	inc: inc,
	dec: dec,
	getx: getx,
	setx: setx
    };
};

