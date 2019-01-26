console.log("test...")


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//rectangle part 1 
ctx.moveTo(0,0);
ctx.lineTo(200,100);

ctx.moveTo(200,100);
ctx.lineTo(0,200);

//Tommy's Rectangle 
ctx.strokeStyle= "blue";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "rgb(200, 50, 10)";
ctx.fillRect(75, 125, 150, 100); // first two are the starting coordinates, coordinate system of computer top left is 0,0 and at the bottom it is positive: 0, 300, 300, 0 
ctx.strokeStyle = "green"
ctx.strokeRect(50, 100, 200, 150); 
ctx.clearRect(125, 150, 50, 50); // first two are the starting coordinates, coordinate system of computer top left is 0,0 and at the bottom it is positive: 0, 300, 300, 0 

//My own design 
var d = document.getElementById("madhaviCanvas2");
var dtx = d.getContext("2d");
dtx.fillRect(0,0, 150, 150);
dtx.fillStyle = "rgb(200, 50, 10)"
dtx.fillRect(150, 150, 150, 150);
dtx.fillStyle = "green"


