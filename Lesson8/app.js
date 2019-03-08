


//LESSON 7 PHASER PROJECT WORK 

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

//LESSON 8 PHASER PROJECT WORK  

	//Creating the player sprite 
	player = game.add.sprite(32, 400, 'dude'); //first we add our sprite to game, set its initial coordinates and assign the sprite an asset key 

	//Animating player sprite when it moves inside window 
	player.animations.add('left', [0, 1, 2, 3],10,true); //'left' is the name of the animation, 10 is the number of frames per second 
	player.animations.add('right', [5, 6, 7, 8],10,true); //square brackets: frames for the animation, 'true': loop the animation 

	//Turn on physics for image sprite and setting up its values 
	game.physics.arcade.enable(player); //image sprite will obey law of physics 
	player.body.bounce.y = 0.2; 
	player.body.gravity.y = 300; 
	player.body.collideWorldBounds = true; //these relate to the physics feature we turned on 

	//Creating the enemy sprite 
	enemy1 = game.add.sprite(760, 20, 'baddie'); //follows same steps to create an enemy sprite in the game 

	//Animating the enemy1 sprite when it moves inside window 
	enemy1.animations.add('left', [0,1],10,true); //'left' is the name of the animation, 10 is the number of frames per second 
	enemy1.animations.add('right', [2,3],10,true); //square brackets: frames for the animation, 'true': loop the animation 

	//Turn on physics for enemy sprite and setting up its values
	game.physics.arcade.enable(enemy1); //image sprite will obey law of physics 
	enemy1.body.bounce.y = 0.2; 
	enemy1.body.gravity.y = 500; 
	enemy1.body.collideWorldBounds = true; //these relate to the physics feature we turned on 

	//Creating the stars 
	stars = game.add.physicsGroup(); //this makes a group for all the stars inserted in thee project 
	stars.enableBody = true; //enable this group's interaction with the other objects already being created 

	//We will create 12 stars evenly spaced 
	for(var i = 0; i < 12; i++){
		var star = stars.create(i * 70, 0, 'star'); //makes a 'for' loop to create 12 stars exactly similar to each other and evenly spaced in the sky 
		star.body.gravity.y = 200; 
		star.body.bounce.y = 0.7 + Math.random() * 0.2 //set its gravity and vertical bounce to an initial random value with the help of Math.random() command

	}

//Create keyboard entries. We'll use our keyboard to input our commands. 
cursors = game.input.keyboard.createCursorKeys(); //we first assign arrow keys to move our player sprite. 

//CHALLENGE 1: ADD WASD KEYS AS AN ALTERNATIVE TO ARROW KEYS 
wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
dKey = game.input.keyboard.addKey(Phaser.Keyboard.D); //this adds all the keys in create function 

//CHALLENGE 2: ADD ANOTHER ENEMY

enemy2 = game.add.sprite(10, 20, 'baddie'); //follows same steps to create an enemy sprite in the game 

	//Animating the enemy2 sprite when it moves inside window 
	enemy2.animations.add('left', [0,1],10,true); //'left' is the name of the animation, 10 is the number of frames per second 
	enemy2.animations.add('right', [2,3],10,true); //square brackets: frames for the animation, 'true': loop the animation 

	
	game.physics.arcade.enable(enemy2); //image sprite will obey law of physics 
	enemy2.body.bounce.y = 0.2; 
	enemy2.body.gravity.y = 500; 
	enemy2.body.collideWorldBounds = true; //these relate to the physics feature we turned on



}

function update() {
	//Setting collisions 
	game.physics.arcade.collide(player, platforms); //sets up the collisions between both sprites and platforms by making use of physics properties 
	game.physics.arcade.collide(stars, platforms); 
	game.physics.arcade.collide(enemy1, platforms);
	game.physics.arcade.collide(enemy2, platforms);  

	//Reset the player's velocity if no events 
	player.body.velocity.x = 0; //sets the player speed and also stop the player if it is not moving 

	//Player movement by keys 
if(cursors.left.isDown || aKey.isDown){ //checks if the left key is pressed or not 
		//move left
		player.body.velocity.x = -150; //sets velocity to negative value so the sprite moves towards the left 
		player.animations.play('left'); //set animation so it appears to turn left 

	} else if(cursors.right.isDown || dKey.isDown){ //checks if the right key is pressed or not 
		//move right
		player.body.velocity.x = 150; //sets velocity to positive value so the sprite moves towards the right
		player.animations.play('right'); //sets animation so it appears to turn right 

	} else {
		player.animations.stop(); //third condition in which neither arrow key is pressed 
		player.frame = 4; //sprite stops moving and stand still looking in the front 
	}

//Allow the player to jump if touching the ground 
if((cursors.up.isDown || wKey.isDown) && player.body.touching.down){ //to prevent double jump, make sure sprite touches ground before jumping 
	player.body.velocity.y = -300; //sprite will jump only if the up arrow key is pressd and it is touching the ground. Y velocity is negative to make the sprite move upwards 
}




}