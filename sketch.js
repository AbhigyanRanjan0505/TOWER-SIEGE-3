const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var back;
var score = 0;
var gameState = "Start";

function preload() {
    setBackground();
}

function setup() {
    var canvas = createCanvas(1250, 580);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width / 2, height, 1500, 15);
    ground1 = new Ground((width / 2) + 75, height / 2, 300, 15);
    ground2 = new Ground(width - 200, height - 100, 300, 15);

    //1.
    //base || level1
    box1 = new Box1(700, (height / 2) - 15, 40, 40);
    box2 = new Box1(660, (height / 2) - 15, 40, 40);
    box3 = new Box1(740, (height / 2) - 15, 40, 40);
    box4 = new Box1(620, (height / 2) - 15, 40, 40);
    box5 = new Box1(780, (height / 2) - 15, 40, 40);
    box6 = new Box1(580, (height / 2) - 15, 40, 40);
    box7 = new Box1(820, (height / 2) - 15, 40, 40);

    //level2
    box8 = new Box1(700, (height / 2) - 55, 40, 40);
    box9 = new Box1(660, (height / 2) - 55, 40, 40);
    box10 = new Box1(740, (height / 2) - 55, 40, 40);
    box11 = new Box1(620, (height / 2) - 55, 40, 40);
    box12 = new Box1(780, (height / 2) - 55, 40, 40);

    //level3
    box13 = new Box1(660, (height / 2) - 95, 40, 40);
    box14 = new Box1(700, (height / 2) - 95, 40, 40);
    box15 = new Box1(740, (height / 2) - 95, 40, 40);

    //top || level4
    box16 = new Box1(700, (height / 2) - 135, 40, 40);

    //2.
    //base || level1
    box17 = new Box1(width - 200, height - 115, 40, 40);
    box18 = new Box1((width - 200) - 40, height - 115, 40, 40);
    box19 = new Box1((width - 200) + 40, height - 115, 40, 40);
    box20 = new Box1((width - 200) - 80, height - 115, 40, 40);
    box21 = new Box1((width - 200) + 80, height - 115, 40, 40);
    box22 = new Box1((width - 200) - 120, height - 115, 40, 40);
    box23 = new Box1((width - 200) + 120, height - 115, 40, 40);

    //level2
    box24 = new Box1(width - 200, height - 155, 40, 40);
    box25 = new Box1((width - 200) - 40, height - 155, 40, 40);
    box26 = new Box1((width - 200) + 40, height - 155, 40, 40);
    box27 = new Box1((width - 200) - 80, height - 155, 40, 40);
    box28 = new Box1((width - 200) + 80, height - 155, 40, 40);

    //level3
    box29 = new Box1((width - 200) - 40, height - 195, 40, 40);
    box30 = new Box1(width - 200, height - 195, 40, 40);
    box31 = new Box1((width - 200) + 40, height - 195, 40, 40);

    //top || level4
    box32 = new Box1(width - 200, height - 235, 40, 40);
    //end

    hex = new Hex(200, height - 200, 30, 30);
    slingshot = new SlingShot(hex.body, { x: 200, y: 380 });
}

function draw() {
    fill("Red");
    noStroke();
    textSize(25);
    if (back) {
        background(back);
    }
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();

    box8.display2();
    box9.display2();
    box10.display2();
    box11.display2();
    box12.display2();

    box24.display2();
    box25.display2();
    box26.display2();
    box27.display2();
    box28.display2();

    box13.display3();
    box14.display3();
    box15.display3();

    box29.display3();
    box30.display3();
    box31.display3();

    box16.display4();

    box32.display4();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();
    box31.score();
    box32.score();

    ground.display();
    ground1.display();
    ground2.display();
    hex.display();
    slingshot.display();

    //writes the text
    //text("Press space to get more chances!!", width - 400, 50);
    text("Drag to release", 50, 50);
}

function mouseDragged() {
    if (gameState !== "launched") {
        Matter.Body.setPosition(hex.body, { x: mouseX, y: mouseY });
    }
}

function mouseReleased() {
    slingshot.fly();
    gameState = "launched";
}

function keyPressed() {
    if (keyCode === 32) {
        //slingshot.attach(hex.body);
    }
}

async function setBackground() {
    var res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var resJson = await res.json();
    var DT = resJson.datetime;
    var bg;
    var hour = DT.slice(11, 13);
    if (hour >= 06 && hour <= 19) {
        bg = "bgw.png"
    }
    else {
        bg = "bgb.png"
    }
    back = loadImage(bg);
}