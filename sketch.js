var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber1, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var jogar =1;
var fimdejogo=0;
var estadodejogo= jogar;
var dragao;
var dragaoimg;
var sg;
var sgimg;
var barreira1,barreira2;

var reset,resetimg;



function preload(){
  towerImg = loadImage("grass 2.jpg");
  doorImg = loadImage("fogo.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("glad.png");
  spookySound = loadSound("spooky.wav");
  resetimg= loadImage("reset.png");
dragaoimg=loadImage('dragao.png');
sgimg=loadImage('s.png');

}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);

  
  ghost=createSprite(300,500,5,5);
  ghost.addImage("climber",ghostImg );
ghost.scale=0.2;
ghost.debug=true;

reset=createSprite(300,300,50,50);
reset.addImage(resetimg); 
reset.scale=0.4;

dragao=createSprite(300,0);
dragao.addImage(dragaoimg);
dragao.scale=0.4;

barreira1=createSprite(0,300,1,600);
barreira1.visible=false;
barreira2=createSprite(600,300,1,600);
barreira2.visible=false;
climbersGroup=new Group();

doorsGroup=new Group();



}

function draw() {
  background(900);


if (estadodejogo==jogar){

reset.visible=false;

tower.velocityY = 1;

gerarclimbers();

  if(tower.y > height){
      tower.y =height/2;
  }


if(keyDown('D')){
  ghost.x=ghost.x+3;
}


if(keyDown('a')){
  ghost.x=ghost.x-3;
}

if(keyDown('space')){
  ghost.velocityY=-1
}

ghost.velocityY=ghost.velocityY+0.1;

if(keyDown('w')){

  ghost.velocityX=0;
}


if (ghost.y>600){
  



  estadodejogo=fimdejogo;
  
}
if (ghost.isTouching(dragao)){
  estadodejogo=fimdejogo;
  sg=createSprite(300,300);
  sg.addImage(sgimg);
  sg.scale=0.2;

}

}
 if(estadodejogo==fimdejogo){
  tower.velocityY = 0;
  doorsGroup.setVelocityYEach(0);
  climbersGroup.setVelocityYEach(0);
  doorsGroup.destroyEach();
  climbersGroup.destroyEach();

if(mousePressedOver(reset)){
  resetar();
}
reset.visible=true;
 }





ghost.collide(doorsGroup);
ghost.collide(barreira1);
ghost.collide(barreira2);
ghost.collide(dragao);

  drawSprites();
   
}

function gerarclimbers(){

  if (frameCount%150==0){

    door=createSprite(200,50);
    door.x=Math.round(random(100,400));
    door.addImage(doorImg);
    door.scale=0.2;
 door.velocityY=2;
door.lifeTime=200;
ghost.depth =door.depth;
ghost.depth =ghost.depth+1;

    climber1=createSprite(200,16);
  climber1.x=door.x;
    climber1.addImage("climber1", climberImg );
    climber1.velocityY=2;
climber1.lifeTime=0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001;
climber1.debug=false;
  climber1.visible=false;
doorsGroup.add(door);

climbersGroup.add(climber1);

  }



}

 function resetar(){
estadodejogo=jogar;



 }
