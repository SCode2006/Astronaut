
var astronaut,moveImg;
var iss;
var bathImg,brushImg,drinkImg,eatImg,gymImg,sleepImg,issImg,gymImg2;
var topEdge,bottomEdge,rightEdge,leftEdge;


function preload(){
  moveImg = loadAnimation("move.png","move1.png");
  bathImg = loadAnimation("bath1.png","bath2.png");
  brushImg = loadImage("brush.png");
  drinkImg = loadAnimation("drink1.png","drink2.png");
  eatImg = loadAnimation("eat1.png","eat2.png");
  gymImg = loadAnimation("gym1.png","gym2.png");
  issImg = loadImage("iss.png");
  sleepImg = loadImage("sleep.png");
  gymImg2 = loadImage("gym11.png","gym12.png");
}

function setup() {
  createCanvas(1200,800);
 
  

  iss = createSprite(600, 400);
  iss.addImage("background",issImg);
  iss.scale = 0.5;

  astronaut = createSprite(600,400);
  astronaut.addImage("asleep",sleepImg);
  astronaut.scale = 0.1;
  
  

  topEdge = createSprite(600,0,1200,10);
  bottomEdge = createSprite(600,800,600,10);
  leftEdge = createSprite(0,400,10,800);
  rightEdge = createSprite(1200,400,10,800);
  topEdge.visible = false;
  bottomEdge.visible = false;
  leftEdge.visible = false;
  rightEdge.visible = false;

  

  //astronaut.debug = true;
  //astronaut.setCollider("rectangle",0,0,1500,2000);

  iss.depth = topEdge.depth;
  topEdge.depth = topEdge.depth+1;
  iss.depth = bottomEdge.depth;
  bottomEdge.depth = bottomEdge.depth+1;
  iss.depth = leftEdge.depth;
  leftEdge.depth = leftEdge.depth+1;
  iss.depth = rightEdge.depth;
  rightEdge.depth = rightEdge.depth+1;
  iss.depth = astronaut.depth;
  astronaut.depth = astronaut.depth+1;
}

function draw() {
  background(255,255,255);  

  
  
  
  
  
  

  

  astronaut.bounceOff(bottomEdge);
  astronaut.bounceOff(topEdge);
  astronaut.bounceOff(leftEdge);
  astronaut.bounceOff(rightEdge);

  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("brushing",brushImg);
    astronaut.changeAnimation("brushing");
    astronaut.velocityX = -2;
    astronaut.velocityY = 4;
  }
  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("moving",gymImg);
    astronaut.changeAnimation("moving");
    astronaut.velcityX = -3;
    astronaut.velocityY = -1;
  }
  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("eating",eatImg);
    astronaut.changeAnimation("eating");
    astronaut.velocityX = 3;
    astronaut.velocityY = 4;
  }
  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("drinking",drinkImg);
    astronaut.changeAnimation("drinking");
    astronaut.velocityX = 2;
    astronaut.velocityY = -3;
  }
  if(keyDown("B")){
    astronaut.addAnimation("bathing",bathImg);
    astronaut.changeAnimation("bathing");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("G")){
    astronaut.addAnimation("working",gymImg2);
    astronaut.changeAnimation("working");
    astronaut.velocityX = -3;
    astronaut.velocityY = -1;
  }
  
  
  



  drawSprites();
}