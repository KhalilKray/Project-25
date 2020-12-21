
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper,trash;

function preload()
{
	trash = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 390, 1200, 10);
	paper = new Paper(100, 380, 10, 10);
	bottomb = Bodies.rectangle(100,375,200,20, {
		isStatic: true
	});
	World.add(world, bottomb);
	side1b = Bodies.rectangle(900,335,20,100, {
		isStatic: true
	});
	World.add(world, side1b);
	side2b = Bodies.rectangle(1100,335,20,100, {
		isStatic: true
	});
	World.add(world, side2b);

	

	bottom = createSprite(1000,375,200,20);
	bottom.shapeColor = color(255,0,0);

	side1 = createSprite(900,335,20,100);
	side1.shapeColor = color(255,0,0);

	side2 = createSprite(1100,335,20,100);
	side2.shapeColor = color(255,0,0);

	bottom.visible = false;
	side1.visible = false;
	side2.visible = false;
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  paper.display();
  image(trash, 850, 170, 280, 220);

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 160, y: -160});
	}
}