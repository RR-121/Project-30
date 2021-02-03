const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, stand1, stand2, stand3, Polygon, PolygonImg, SlingShot1;
var obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16, obj17, obj18, obj19, obj20, obj21, obj22, obj23, obj24, obj25, obj26, obj27, obj28, obj29, obj30, obj31, obj32, obj33, obj34, obj35, obj36, obj37, obj38, obj39, obj40; 

function preload() {
    PolygonImg = loadImage("polygon.png");
}

function setup() {
    createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 675, 1200, 50);
    stand1 = new Ground(1000, 430, 250, 20);
    stand2 = new Ground(650, 170, 200, 20);
    stand3 = new Ground(400, 570, 240, 20);

    //for stand1 - level 1 (bottom)
    obj1 = new Box(920, 400, 40, 40);
    obj2 = new Box(960, 400, 40, 40);
    obj3 = new Box(1000, 400, 40, 40);
    obj4 = new Box(1040, 400, 40, 40);
    obj5 = new Box(1080, 400, 40, 40);

    //for stand1 - level 2
    obj6 = new Box(940, 360, 40, 40);
    obj7 = new Box(980, 360, 40, 40);
    obj8 = new Box(1020, 360, 40, 40);
    obj9 = new Box(1060, 360, 40, 40);

    //for stand1 - level 3
    obj10 = new Box(960, 320, 40, 40);
    obj11 = new Box(1000, 320, 40, 40);
    obj12 = new Box(1040, 320, 40, 40);

    //for stand1 - level 4
    obj13 = new Box(980, 280, 40, 40);
    obj14 = new Box(1020, 280, 40, 40);

    //for stand1 - level 5 (top)
    obj15 = new Box(1000, 235, 40, 40);

    //for stand2 - level 1 (bottom)
    obj16 = new Box(590, 135, 30, 40);
    obj17 = new Box(620, 135, 30, 40);
    obj18 = new Box(650, 135, 30, 40);
    obj19 = new Box(680, 135, 30, 40);
    obj20 = new Box(710, 135, 30, 40);

    //for stand2 - level 2
    obj21 = new Box(620, 95, 30, 40);
    obj22 = new Box(650, 95, 30, 40);
    obj23 = new Box(680, 95, 30, 40);

    //for stand2 - level 3 (top)
    obj24 = new Box(650, 55, 30, 40);

    //for stand3 - level 1 (bottom)
    obj25 = new Box(320, 545, 30, 30);
    obj26 = new Box(370, 545, 30, 30);
    obj27 = new Box(430, 545, 30, 30);
    obj28 = new Box(480, 545, 30, 30);

    //for stand3 - level 1.5 
    obj29 = new Box(340, 535, 60, 10);
    obj30 = new Box(400, 535, 60, 10);
    obj31 = new Box(460, 535, 60, 10);

    //for stand3 - level 2
    obj32 = new Box(350, 505, 30, 30);
    obj33 = new Box(400, 505, 30, 30);
    obj34 = new Box(450, 505, 30, 30);

    //for stand3 - level 2.5
    obj35 = new Box(370, 495, 60, 10);
    obj36 = new Box(430, 495, 60, 10);

    //for stand3 - level 3
    obj37 = new Box(380, 465, 30, 30);
    obj38 = new Box(420, 465, 30, 30);

    //for stand3 - level 3.5
    obj39 = new Box(400, 455, 60, 10);

    //for stand3 - level 4 (top)
    obj40 = new Box(400, 425, 30, 30);

    var options = {isStatic : false, restitution : 0.9, density : 1.3};
    Polygon = Bodies.circle(120, 270, 15, options);
    World.add(world, Polygon);

    SlingShot1 = new SlingShot(this.Polygon, {x : 130, y : 280});
}

function draw() {
    background(0);
    Engine.update(engine);

    imageMode(CENTER);
    image(PolygonImg, Polygon.position.x, Polygon.position.y, 35, 35);

    ground.display();
    stand1.display();
    stand2.display();
    stand3.display();
    obj1.display();
    obj2.display();
    obj3.display();
    obj4.display();
    obj5.display();
    obj6.display();
    obj7.display();
    obj8.display();
    obj9.display();
    obj10.display();
    obj11.display();
    obj12.display();
    obj13.display();
    obj14.display();
    obj15.display();
    obj16.display();
    obj17.display();
    obj18.display();
    obj19.display();
    obj20.display();
    obj21.display();
    obj22.display();
    obj23.display();
    obj24.display();
    obj25.display();
    obj26.display();
    obj27.display();
    obj28.display();
    obj29.display();
    obj30.display();
    obj31.display();
    obj32.display();
    obj33.display();
    obj34.display();
    obj35.display();
    obj36.display();
    obj37.display();
    obj38.display();
    obj39.display();
    obj40.display();
    SlingShot1.display();
}

function mouseDragged() {
    Matter.Body.setPosition(this.Polygon, {x : mouseX, y : mouseY});
}

function mouseReleased(){
    SlingShot1.fly();
}

function keyPressed() {
    if(keyCode === 32) {
        SlingShot1.attach(Polygon);
    }
}