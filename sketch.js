const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
//var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box1,box2,box3,box4,box5,box6,box7,box8,box9;
var slingshot;
var polygon_img;

var bg = "bg.png"  ;
var backgroundImg;
var Score = 0;


function preload() {
  polygon_img=loadImage("Hexagon IMG.jpeg") ; 
  backgroundImg=loadImage("bg.png")
  getBackgroundImg() ;
}

function setup(){
     createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground=new Ground (200,300,40,50);
    
    stand1=new Stand(390,300,250,10);
    stand2=new Stand(700,200,200,10);

   // level 1
    box1 = new Box (300,275,30,40);
    //console.log(box1);
    box2 = new Box (330,275,30,40);
    box3 = new Box (360,275,30,40);
    box4 = new Box (390,275,30,40);
    box5 = new Box (420,275,30,40);
    box6 = new Box (450,275,30,40);
    box7 = new Box (480,275,30,40);

    // level2
    box8 = new Box (330,235,30,40);
    box9 = new Box (360,235,30,40);
    box10 = new Box (390,235,30,40);
    box11 = new Box (420,235,30,40);
    box12 = new Box (450,235,30,40);
    //level3
    box13 = new Box (360,195,30,40);
    box14 = new Box (390,195,30,40);
    box15 = new Box (420,195,30,40);
    //top
    box16 = new Box (390,155,30,40);

    //set2 for second stand 
    //level1
    box1 = new Box (640,175,30,40);
    box2 = new Box (670,175,30,40);
    box3 = new Box (700,175,30,40);
    box4 = new Box (730,175,30,40);
    box5 = new Box (760,175,30,40);
    //level 2
    box6 = new Box (670,135,30,40);
    box7 = new Box (700,135,30,40);
    box8 = new Box (730,135,30,40);
    // top
    box9 = new Box (700,95,30,40);
    
    // ball holder with slings
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    
    

  slingshot = new slingShot(this.ball,{x:100,y:200});
  getBackgroundImg() ;
}

   


function draw(){

  if(backgroundImg);
    background(backgroundImg);
    //background(56,44,44);
    

    ground.display();
    stand1.display();
    stand2.display();
    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("pink");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("turquoise");
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
   // ball.display();
    slingshot.display();

    textSize(20);
    fill("yellow");
    text("PRESS SPACE BAR TO GET SECOND CHANCE",100,30);

    push();

    text("SCORE:" + Score,750,40);
    pop();
    
    imageMode(CENTER)
    image(polygon_img,ball.position.x,ball.position.y,40,40);

    box1.Score();
    box2.Score();
    box3.Score();
    box4.Score();
    box5.Score();
    box6.Score();
    box7.Score();
    
    box8.Score();
    box9.Score();
    box10.Score();
    box11.Score();
    box12.Score();
    
    box13.Score();
    box14.Score();
    box15.Score();
    box16.Score();

    box1.Score();
    box2.Score();
    box3.Score();
    box4.Score();
    box5.Score();
    box6.Score();
    box7.Score();
    box8.Score();
    box9.Score();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
 
function keyPressed(){
  if(keyCode=== 32 ){
      slingshot.attach(this.ball);
  }
}

async function getBackgroundImg() {
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson=await response.json()
  console.log(responseJson);
  
  var dt = responseJson.datetime;
  var hour= dt.slice(11,13);
  console.log(hour);
  
  if(hour>=06 && hour<=18){
      bg="bg.png";
  }
  else {
      bg="bg2.jpg";
  }
  backgroundImg=loadImage(bg);
  }