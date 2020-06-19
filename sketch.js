var rocket, rocketimg, bullet, bubble, bubbleimg, bubbleGroup, score=0;

function preload(){
  rocketimg=loadImage("rocket.png");
  bubbleimg=loadImage("bubble.png");

}
function setup(){
  createCanvas(500,500);

  bullet=createSprite(200, 200, 100, 5);

  bubbleGroup=createGroup();

  rocket=createSprite(200,200,20,20);
  rocket.addImage("r", rocketimg);

  rocket.scale=0.1;
  rocket.rotation=90;
}

function draw(){
  background(0);

  createBubbles();

  bullet.x=rocket.x;
  bullet.y=rocket.y;

  bullet.rotation=rocket.rotation;

  if(bubbleGroup.isTouching(bullet)){
    bubbleGroup.destroyEach();
    score++
  }

  if(keyDown(LEFT_ARROW)){
    rocket.rotation=rocket.rotation-3;
    
  }

  if(keyDown(RIGHT_ARROW)){
    rocket.rotation=rocket.rotation+3;
    
  }

  if(keyCode===32){
    bullet.velocityY=10;
  }

  if(keyDown(UP_ARROW)){
    rocket.setSpeedAndDirection(7,rocket.rotation);
  }else{
    rocket.setSpeedAndDirection(0,rocket.rotation);
  }
  drawSprites();
  //console.log(rocket.getDirection())

  fill(255);
  text("Score: "+score, 50, 50);
  text("use the stick on the rocket to burst the bubbles", 200, 50);
}

function createBubbles(){
  if(frameCount%40===0){
    bubble=createSprite(random(20, 480),random(20, 480),200,200);
    bubble.addImage("b", bubbleimg);

    bubble.scale=0.1;

    bubble.velocityY=random(-3,3);
    bubble.velocityX=random(-3,3);

    bubble.lifetime=134;
  

    bubbleGroup.add(bubble);
    
  }
}