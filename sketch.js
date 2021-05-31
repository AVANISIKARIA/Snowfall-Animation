const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var woman,walking,jumping,standing;


function preload() {
    
   bg=loadImage("snowtree.jpg");
   walking=loadAnimation("normie-woman-walking-cycle-stock-gif-10488-1280x720.gif")
   jumping=loadAnimation("normie-woman-happy-jump-stock-gif-10431-1280x720.gif")
   standing=loadImage("standing.jpg")
}

function setup() {
  createCanvas(1200,600);
  createSprite(400, 200, 50, 50);

  woman=createSprite(200,500,50,100);
  woman.addImage("womanStanding",standing);
  woman.scale=0.25;

  engine = Engine.create();
  world = engine.world;


}

function draw() {

  background(bg);

  Engine.update(engine);

  if(keyDown(RIGHT_ARROW)){
     woman.addAnimation("womanWalking",walking);
  }
  else if(keyDown(UP_ARROW)){
    woman.addAnimation("womanJumping",jumping);

  }

  if(frameCount%90===0){   
    particles=new Particles(width/2-10,width/2+10,10,10);
  }
 
  for (var a = 0; a < particles.length; a++) {
    particles[a].display();
  }
  
 drawSprites();

}

