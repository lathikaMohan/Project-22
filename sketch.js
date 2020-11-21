//Physics Engine


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engin,world;
var object , obj_ball;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  var options={
    isStatic:true
  }
  var ball1={
    restitution:1.0
  }
  object = Bodies.rectangle(400,390,800,20,options);
  World.add(world,object);
  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);
  obj_ball = Bodies.circle(200,100,20,ball1);
  World.add(world,obj_ball);


}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER); 
  rect(object.position.x,object.position.y,800,20); 
  ellipseMode(RADIUS);
ellipse(sobj_ball.position.x,obj_ball.position.y,20,20);
  drawSprites();
}