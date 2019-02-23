var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preload, create:create, update:update}); //numbers are width and height 
//phaser.auto is set up by computer, '' put canvas in body

//more variables 
var score = 0; 
var life = 3; 

function preload() {
	game.load.image('sky', 'assets/sky.png'); //first is the id, second is the source path, go to assets file and find the image 
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star', 'assets/star.png');
	//sprite 
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48); //width and height of the characters 
	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);

}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0,0, 'sky');
	//create the platforms 
	platforms = game.add.physicsGroup();
	platforms.enableBody = true; 

	//create the ground 
	var ground = platforms.create(0, 550, 'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true; 

	//create the ledges 
	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true; 
	ledge = platforms.create(-100, 250, 'ground');
	ledge.body.immovable = true; 

	// set text style 
	var style = {font: "bold 32px Arial", fill: "#fff"}

	//positioning the score 
	scorelabel = game.add.text(300, 500, "Score:", style); //making the label
	scoretext = game.add.text(420, 560, score, style); //calling the number 

	//positioning the lives 
	lifelabel = game.add.text(10, 5, "Lives:", style); //making the label
	lifetext = game.add.text(120, 5, life, style); //calling the number 



}

function update() {



}