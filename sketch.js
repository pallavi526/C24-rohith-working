
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	var ground_options={
		isStatic:true
	}
	ground = Bodies.rectangle(width/2,700,width,10,ground_options)
	
		   
		 World.add(world,ground);

	//Create the Bodies Here.
	dustbin=new DustBin(1200,650);
	paper=new Paper(200,450,40);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   dustbin.display();
   paper.display();
 
   rectMode(CENTER);
   rect(ground.position.x,ground.position.y,1600,20)
 
}
 
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}

