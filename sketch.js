var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudgroup,cloudimage;
var cactusgroup,cactus1 ,cactus2, cactus3, cactus4, cactus5, cactus6;;
var count

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudimage=loadImage('cloud.png');
  cactus1=loadImage('obstacle1.png');
  cactus2=loadImage('obstacle2.png');
  cactus3=loadImage('obstacle3.png');
  cactus4=loadImage('obstacle4.png');
  cactus5=loadImage('obstacle5.png');
  cactus6=loadImage('obstacle6.png');
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudgroup=new Group();
  cactusgroup=new Group();
  
  count=0;
  
}

function draw() {
  background(50,150,180);
  
  count=count+Math.round(getFrameRate()/60);
  fill(255);
  text("score:"+count,500,50);
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  spawnclouds();
 spawncactus();
  
  drawSprites();
}

function spawnclouds(){
 if(frameCount %60==0){
 var cloud=createSprite(600,120,40,10);
   cloud.y=Math.round(random(80,120));
   cloud.addImage(cloudimage);
   cloud.scale=0.5;
   cloud.velocityX=-4;
   cloud.lifetime=150;
   cloud.depth=trex.depth;
   trex.depth=trex.depth+1;
   cloudgroup.add(cloud);
   
 }
  
}
function spawncactus(){
  if(frameCount%100==00){
    var cactus=createSprite(600,165,10,40); 
    cactus.velocityX=-4;
    var num=Math.round(random(1,6));
    
    switch(num){
      case 1: cactus.addImage(cactus1);
      break;
      case 2: cactus.addImage(cactus2);
      break; 
      case 3: cactus.addImage(cactus3);
      break;
      case 4: cactus.addImage(cactus4);
      break;
      case 5: cactus.addImage(cactus5);
      break;
      case 6: cactus.addImage(cactus6);
      break;
      default:break
      
      
    }
  cactus.scale=0.5;
  cactus.lifetime=300;
  cactusgroup.add(cactus);
        
    }

  }