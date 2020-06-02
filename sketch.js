const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ball,box1,box2,box3,box4,box5,box6,ground,platform;
var slingshot;

function setup(){
    var canvas = createCanvas(800,400)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,385,800,30)
    ball = new Box(30,200,40,40,"blue");
    box1 = new Box(749,142,40,40,"cyan");
    box2 = new Box(692,142,40,40,"Yellow");
    box3 = new Box(511,142,40,40,"black");
    box4 = new Box(545,142,40,40,"magenta");
    box5 = new Box(588,142,40,40,"khaki");
    box6 = new Box(628,142,40,40,"purple");
    platform = new Ground(650,200,350,30);
    slingshot = new Slingshot(ball.body,{
        x: 154,
        y: 210
    });

}

function draw(){
    background(255);
    Engine.update(engine);
    ground.display();
    ball.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    slingshot.display();
    platform.display();
    text(mouseX+","+mouseY,20,20);
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if (keyCode===32){
        Matter.Body.setPosition(ball.body,{x:30,y:200});
        slingshot.attach(ball.body);
    }
}