const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,300,70,70);
    box2 = new Box(800,300,70,70);
    box3 = new Box(1000,100,70,70);
    box4 = new Box(800,100,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(900,300);
    pig2 = new Pig(900,100);
    bird1 = new Bird(100,100);
    log1 = new Log(900,200,275,30);
    log2 = new Log(900,0,275,30);
}


function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    bird1.display();
    log1.display();
    log2.display();
}