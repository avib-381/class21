var fixedRect, movingRect
var gameObj1, gameObj2, gameObj3, gameObj4 




function setup() {
 
 
  createCanvas(1200,800);
  
  fixedRect = createSprite(600, 400, 50, 80);
  movingRect = createSprite (400,200,80,30)

  gameObj1 = createSprite (100, 100, 50, 50)
  gameObj1.shapeColor = "orange"
  
  gameObj2 = createSprite (200, 100, 50, 50)
  gameObj2.shapeColor = "orange"

  gameObj3 = createSprite (300, 100, 50, 50)
  gameObj3.shapeColor = "orange"

  gameObj4 = createSprite (400, 100, 50, 50)
  gameObj4.shapeColor = "orange"


  fixedRect.shapeColor =  "red"
  movingRect.shapeColor = "red"

  movingRect.velocityY = -5
  fixedRect.velocityY = 5





}

function draw() {
  background("black");  
  
  movingRect.y = mouseY
  movingRect.x = mouseX

  
bounceOff (movingRect, fixedRect)
 
  if (isTouching (movingRect, gameObj4)){
    movingRect.shapeColor = "blue"
    gameObj4.shapeColor = "blue"
  }else{
    movingRect.shapeColor = "red"
    gameObj4.shapeColor = "red"
  }

  drawSprites();
}

