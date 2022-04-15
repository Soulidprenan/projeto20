const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var ball;
var rectangle;
var quadrado;
var ground;

function preload() {}

function setup() {
  rectMode(CENTER);
  createCanvas(600, 600);
  ellipseMode(RADIUS);

  engine = Engine.create();
  world = engine.world;

  var optionsGround = {
    isStatic: true,
  };

  var ballOptions = {
    restitution: 0.5,
    friction: 0.02,
    frictionAir: 0,
  };

  var rectangleOptions = {
    restitution: 0.7,
    friction: 0.01,
    frictionAir: 0.1,
  };

  var quadradoOptions = {
    restituition: 0.01,
    friction: 1,
    frictionAir: 0.3,
  };

  //Crie os Corpos Aqui.
  ground = Bodies.rectangle(300, 500, 600, 20, optionsGround);
  World.add(world, ground);

  ball = Bodies.circle(210, 10, 10, ballOptions);
  World.add(world, ball);

  rectangle = Bodies.rectangle(110, 10, 20, 10, rectangleOptions);
  World.add(world, rectangle);

  quadrado = Bodies.rectangle(350, 10, 10, 10, quadradoOptions);
  World.add(world, quadrado);

  var plane_options = {
    isStatic: true,
  };

  Engine.run(engine);
}

function draw() {
  background("green");

  Engine.update(engine);
  push();
  fill("green");
  rect(ground.position.x, ground.position.y, 600, 20);
  pop();
  push();
  fill("red");
 
  ellipse(ball.position.x, ball.position.y, 10, 10);
  rect(rectangle.position.x, rectangle.position.y, 20, 10);
  rect(quadrado.position.x, quadrado.position.y, 10, 10);
  pop();
}
