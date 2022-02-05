var box 
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20)
  box.shapeColor = "blue"
}

function draw() 
{
  background("red");
  if(keyDown("up")){
    box.y -=1
  }
  if(keyDown("down")){
    box.y +=1
  }
  if(keyDown("left")){
    box.x -=1
  }
  if(keyDown("right")){
    box.x +=1
  }
drawSprites()
}




