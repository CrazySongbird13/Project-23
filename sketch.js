var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var side1, side2, bottom;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	

	engine = Engine.create();
	world = engine.world;
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
   	 //create the red box
		side1Sprite= createSprite(290, 610, 20, 100, {isStatic:true});
		side2Sprite=createSprite(510, 610, 20, 100, {isStatic:true});
		bottomSprite=createSprite(400, 650, 200, 20, {isStatic:true});
	   World.add(world, side1Sprite);	
	   World.add(world, side2Sprite);
	   World.add(world, bottomSprite);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  side1Sprite.shapeColor = "red";
  side2Sprite.shapeColor = "red";
  bottomSprite.shapeColor = "red";

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  
    
  }
}



