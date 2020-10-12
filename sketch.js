
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myengine, myworld, ground ;

var box1 , box2 , box3;
var ground;
var paper;


function setup() {
	createCanvas(1400, 700);

	myengine = Engine.create();
    myworld = myengine.world;
	
	box1 = new Box(800,305,80,300);
	ground = new Ground(700,650,1400,10);
	paper = new Paper(200,600);
	
	Engine.run(myengine);
  
}


function draw() {
 
  background("pink");
  
  Engine.update(myengine);

  box1.display();
  ground.display();
  paper.display();

}

function keyPressed(){

	if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body, paper.body.position , {x:150, y:-150});

	}


}

