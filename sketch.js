var ball,playerPaddle,wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wallImg
var walla,wallb,wallc,walld,walle,wallf,wallg,wallh,walli,wallj,wallk,walll
var edges
var fire,fireImg,invisibleGround
var firestand1,firestand2
var score = 0

var SERVE = 1;
var PLAY = 2;
var END = 0;
var END2 = 3;
var gameState = 1;


function preload(){
  fireImg=loadImage("fire.png")
  wallImg=loadImage("brick.png")
}

function setup() {
  createCanvas(800,750);
  ball = createSprite(random(200,700),300, 30,30);
  ball.shapeColor = "red"
  ball.velocityX=3
  ball.velocityY=5

  playerPaddle = createSprite(400,630,150,30)
  

  fire=  createSprite(400,720,800,10)
  fire.addImage(fireImg)
  fire.scale=0.8

  
  

  wall1= createSprite(100,65,130,30)
  wall1.shapeColor="#F710E9"

  wall2= createSprite(300,65,130,30)
  wall2.shapeColor="yellow"

  wall3= createSprite(500,65,130,30)
  wall3.shapeColor="blue"

  wall4= createSprite(700,65,130,30)
  wall4.shapeColor="red"

  wall5= createSprite(100,180,130,30)
  wall5.shapeColor="green"

  wall6= createSprite(300,180,130,30)
  wall6.shapeColor="teal"

  wall7= createSprite(500,180,130,30)
  wall7.shapeColor="brown"

  wall8= createSprite(700,180,130,30)
  wall8.shapeColor="violet"

  wall9= createSprite(100,295,130,30)
  wall9.shapeColor="maroon"

  wall10= createSprite(300,295,130,30)
  wall10.shapeColor="indigo"

  wall11= createSprite(500,295,130,30)
  wall11.shapeColor="lime"

  wall12= createSprite(700,295,130,30)
  wall12.shapeColor="coral"

  walla= createSprite(100,65,130,30)
  walla.visible = false

  wallb= createSprite(300,65,130,30)
  wallb.visible = false

  wallc= createSprite(500,65,130,30)
  wallc.visible = false

  walld= createSprite(700,65,130,30)
  walld.visible = false

  walle= createSprite(100,180,130,30)
  walle.visible = false

  wallf= createSprite(300,180,130,30)
  wallf.visible = false

  wallg= createSprite(500,180,130,30)
  wallg.visible = false

  wallh= createSprite(700,180,130,30)
  wallh.visible = false

  walli= createSprite(100,295,130,30)
  walli.visible = false

  wallj= createSprite(300,295,130,30)
  wallj.visible = false

  wallk= createSprite(500,295,130,30)
  wallk.visible = false

  walll= createSprite(700,295,130,30)
  walll.visible = false

  firestand1=createSprite(34,720,90,90)
  firestand1.shapeColor="C0C6C7"

  firestand2=createSprite(766,720,90,90)
  firestand2.shapeColor="C0C6C7"

  

  
}

function draw() {
  background(0,0,0);  
  
if(gameState===SERVE){
  fill("white")
  textSize(30)
  text("Press Space to Start",250,350)
  edges = createEdgeSprites()
ball.bounceOff(edges)
ball.bounceOff(playerPaddle)
ball.bounceOff(wall1)
ball.bounceOff(wall2)
ball.bounceOff(wall3)
ball.bounceOff(wall4)
ball.bounceOff(wall5)
ball.bounceOff(wall6)
ball.bounceOff(wall7)
ball.bounceOff(wall8)
ball.bounceOff(wall9)
ball.bounceOff(wall10)
ball.bounceOff(wall11)
ball.bounceOff(wall12)

ball.bounceOff(firestand1)
ball.bounceOff(firestand2)

playerPaddle.collide(edges)
  if(keyDown("space")){
  gameState=PLAY
}
}


  playerPaddle.x=World.mouseX


if(gameState===PLAY){
  
  
  textSize(20)
text("Score:"+score,50,25)
 
if(ball.isTouching(wall1)){
  wall1.destroy()
  ball.shapeColor="#F710E9"
  ball.velocityX+=ball.velocityX+0.01
  ball.velocityY+=ball.velocityY+0.01
  ball.bounceOff(walla)
  score=score+1
}
if(ball.isTouching(wall2)){
  wall2.destroy()
  ball.shapeColor="yellow"
  ball.bounceOff(wallb)
  score=score+1
}

if(ball.isTouching(wall3)){
  wall3.destroy()
  ball.shapeColor="blue"
  ball.bounceOff(wallc)
  score=score+1
}

if(ball.isTouching(wall4)){
  wall4.destroy()
  ball.shapeColor="red"
  ball.bounceOff(walld)
  score=score+1
}

if(ball.isTouching(wall5)){
  wall5.destroy()
  ball.shapeColor="green"
  ball.bounceOff(walle)
  score=score+1
}

if(ball.isTouching(wall6)){
  wall6.destroy()
  ball.shapeColor="teal"
  ball.velocityX+=ball.velocityX+0.01
  ball.velocityY+=ball.velocityY+0.01
  ball.bounceOff(wallf)
  score=score+1
}

if(ball.isTouching(wall7)){
  wall7.destroy()
  ball.shapeColor="brown"
  ball.bounceOff(wallg)
  score=score+1
}

if(ball.isTouching(wall8)){
  wall8.destroy()
  ball.shapeColor="violet"
  ball.bounceOff(wallh)
  score=score+1
}

if(ball.isTouching(wall9)){
  wall9.destroy()
  ball.shapeColor="maroon"
  ball.bounceOff(walli)
  score=score+1
}
if(ball.isTouching(wall10)){
  wall10.destroy()
  ball.shapeColor="indigo"
  ball.bounceOff(wallj)
  score=score+1
}
if(ball.isTouching(wall11)){
  wall11.destroy()
  ball.shapeColor="lime"
  ball.velocityX+=ball.velocityX+0.01
  ball.velocityY+=ball.velocityY+0.01
  ball.bounceOff(wallk)
  score=score+1
}
if(ball.isTouching(wall12)){
  wall12.destroy()
  ball.shapeColor="coral"
  ball.bounceOff(walll)
  score=score+1
}


if(score===12){
  gameState=END
}

if(ball.isTouching(fire)){
  gameState=END2
}



edges = createEdgeSprites()
ball.bounceOff(edges)
ball.bounceOff(playerPaddle)
ball.bounceOff(wall1)
ball.bounceOff(wall2)
ball.bounceOff(wall3)
ball.bounceOff(wall4)
ball.bounceOff(wall5)
ball.bounceOff(wall6)
ball.bounceOff(wall7)
ball.bounceOff(wall8)
ball.bounceOff(wall9)
ball.bounceOff(wall10)
ball.bounceOff(wall11)
ball.bounceOff(wall12)

ball.bounceOff(firestand1)
ball.bounceOff(firestand2)

playerPaddle.collide(edges)

  drawSprites();
}
if(gameState===END){
  fill("coral")
  textSize(50)
  text("YOU WON",260,350)
  

  
}
if(gameState===END2){
  fill("coral")
  textSize(50)
  text("YOU LOSE",260,350)
  fill("white")
  
  
  }
}


