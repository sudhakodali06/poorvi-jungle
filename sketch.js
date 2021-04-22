var bg ,player;
var playerImage;
var background1;
var helicophter,helicophterImage,playerFall;
var ground;
var playerFallImage;
var playerStand,playerStandImage;

function preload(){
bg= loadImage("jungle1.webp");
playerImage=loadAnimation("man2.1.png","man2.2.png","man2.3.png","man2.4.png")
helicophterImage=loadImage("helicophter.png")
playerFallImage=loadImage("mankneeling.png");
playerStandImage=loadImage("man2.3.png");
}

function setup() {
  createCanvas(1200,600);
  
  background1= createSprite(0,0,1200,800);
  background1.addImage(bg)
  background1.x=background1.width/2;
 // background1.velocityX=-4;
  background1.scale=2.5;
  
player=createSprite(200,height-200,50,50);
player.addAnimation("man",playerImage)
player.scale=0.4;
player.visible=false;

/*playerStand=createSprite(width/4,height-220,50,50);
playerStand.addImage("man2.3.png",playerStandImage);
playerStand.scale=0.6;
playerStand.visible=false;*/


playerFall=createSprite(width/4,100,10,10)
playerFall.addImage("manKneeling.png",playerFallImage)
playerFall.scale=0.4;


helicophter=createSprite(width/4,100,10,10);
helicophter.addImage("helicophter",helicophterImage);
helicophter.scale=0.8;

 ground=createSprite(200,height-100,1200,20);
 ground.x=width/2;
 ground.visible=false;
 

}

function draw() {
  background(0);
 
  if(background1.x<300){
    background1.x=background1.width/2
  }
 /* if(ground.x<300){
    ground.x=ground.width/2

  }*/

 //playerFall.collide(ground)
 if(playerFall.isTouching (ground)){  
   playerFall.collide(ground);  
 }

if(player.y <300){
  player.velocityY = player.velocityY + 0.8
 }

 if(player.isTouching(ground)){
   player.collide(ground);
 }

  drawSprites();
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    playerFall.velocityY=5;
  }

  if(key==='r'){    
    player.visible = true;
    playerFall.destroy();
    background1.velocityX=-4;
    helicophter.destroy();
   }
   
  if(keyCode === 32){
     player.velocityY = -5;
   }
}
