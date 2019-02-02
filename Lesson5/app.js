console.log("test...")

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//setting up variables 
var width = 600; 
var height = 400; 
var x,y;
var mx, my;
var circleColor = 'rgb(255,0,0)'


//initiate function 
function init() {
	x = 300; 
	y = 200; 
	mx = 3; //speed of x 
	my = 4; // speed of y 
	setInterval(draw, 1); //10 milliseconds, 
}


//circle function 
function circle(x,y,r,color){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28); //how many circle 
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = color;
	ctx.fill(); 

}
//clear function 
function clear() {
	ctx.clearRect(0,0,width,height); //x,y,width, height, write the word because it does not change 
}


//random color function 
function randomColor() {
	var r = Math.floor(Math.random()*255)
	var g = Math.floor(Math.random()*255)
	var b = Math.floor(Math.random()*255)
	return "rgb(" + r + "," + g + "," + b + ")" //separates the variable and string
}


//draw function 
function draw(){
	clear();
	circle(x,y,30, circleColor); //30 is the radius of the circle 

	if(x+mx < 0 || x+mx > width){
		mx = -mx;
		circleColor = randomColor()
	}

	if(y+my < 0 || y+my > height){
		my = -my;
		circleColor = randomColor()
	}

	x += mx; //makes the ball move, reference from x or y, store it back to x 
	y += my; 
}

init();