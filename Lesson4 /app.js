var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


//inserting an image to a canvas 
var img = new Image();
img.src = "1010.jpg";


//inserting avengers images to a canvas 
var bw = new Image();
var capt = new Image();
var hawkeye = new Image();
var hulk = new Image();
var im = new Image();
var thor = new Image();
bw.src = "Black-Widow.png";
capt.src = "capt.png";
hawkeye.src = "hawkeye.png";
hulk.src = "hulk.png";
im.src = "Iron_Man.png";
thor.src = "thor.png";


//onloading all images to the canvas 
img.onload = function(){
	ctx.drawImage(img,100,0,100,100);
}

bw.onload = function(){
	ctx.drawImage(bw,770,150,200,200);
}

capt.onload = function(){
	ctx.drawImage(capt,210,170,150,190);
}

hawkeye.onload = function(){
	ctx.drawImage(hawkeye,90,120,200,200);
}

hulk.onload = function(){
	ctx.drawImage(hulk,120,130,200,200);
}

im.onload = function(){
	ctx.drawImage(im,740,130,200,180);
}

thor.onload = function(){
	ctx.drawImage(thor,130,180,200,180);
}

//changing background
ctx.fillStyle = "sandybrown";
ctx.fillRect(0,380,800,150);
ctx.fillStyle = "midnightblue";
ctx.fillRect(0,0,800,380);


//making a circle 
ctx.beginPath();
ctx.arc(150,150,120,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "cyan";
ctx.fill(); 


//adding text
ctx.font = "60px Bangers"
ctx.fillStyle = 'ivory';
ctx.fillText("Avengers Assemble!", 210, 80);

