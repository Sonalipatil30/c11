var RunnerImg,pathImg,path,Runner,left_boundary,right_boundary,
coin,coinImg,coinscore,power,powerImg,energyDrink,energyDrinkImg,bombImg,bomb;


function preload(){
  //pre-load images
RunnerImg=loadAnimation("Runner-1.png,Runner2.png");
pathImg=loadImage("path.png");
powerImg=loadImage("power.png");
coinImg=loadImage("coin.png");
energyDrinkImg=loadImage("energyDrink.png");
bombImg=loadImage("bomb.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY=4;
path.scale=1.2;
Runner=createSprite(180,340,50,170);
Runner.addAnimation("running,RunnerImg");
coin=createSprite(200,200,80,90);
coin.addImage(coinImg);
coin.scale=0.3;
coin=createSprite(300,200,80,90);
coin.addImage(coinImg);
coin.scale=0.3;
left_boundary=createSprite(0,300,100,600);
right_boundary=createSprite(390,300,80,600);
left_boundary.visible=false;
right_boundary.visible=false;

}

function draw()
 {
  background(0);
  textSize(10);
  text('coinScore',1,200);
  textSize(10);
  text('0,20,230');
  path.velocityY=5;
  Runner.x=world.mouseX;
  if(path.y>400)
  {
  path.y=height/2;
  if(isTouching(coin))
  {
    coinScore=coinScore+1;
  }
 }
 Runner.collide(left_boundary);
 Runner.collide(right_boundary);
 edges=createEdgeSprite();
 Runner.collide(edges[3]);
 drawSprite();
 
  }
