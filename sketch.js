var path,pathImg;
var rabbit,carrot,jungle,knife;
var rabbitImg,carrotImg,jungleImg,knifeImg;
var restart,restartImg;
var dogG,carrotG;
var carrotCollection = 0;
var gameOver,gameOverImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var carrotCollection = 0;

function preload(){
pathImg = loadImage("jungle.jpg");
rabbitImg = loadImage("R.png");
carrotImg = loadImage("carrot.png");
//jungleImg = loadImage("jungle.jpg");
knifeImg = loadImage("knife.png");
gameOverImg = loadImage("gameover.jpg");
restartImg = loadImage("restart.png");
}

function setup() {
 createCanvas(600,400);

 carrotCollection = 0;

path=createSprite(200,200);
path.addImage(pathImg);
path.x = path.width/2


 rabbit = createSprite(100,300,70,80);
 rabbit.addImage("rabbitRunning",rabbitImg);
 rabbit.scale = 0.09;
 
 rabbit.setCollider("circle",0,0,700);
 rabbit.debug = false;

 carrotG = createGroup();
 knifeG = createGroup();

 
}

function draw() {

     


    if(gameState===PLAY){

      path.velocityX = -4 

      carrotCollection = carrotCollection + 1;

      rabbit.y = World.mouseY;
     
      edges= createEdgeSprites();
      rabbit.collide(edges);

      text("Carrots: "+ carrotCollection,200,200);

      if(path.x < 0 ){
        path.x = width/2;
      }
      createKnife();
      createCarrot();
      
      
      

      if(carrotG.isTouching(rabbit)){
        carrotG.destroyEach();
        carrotCollection=carrotCollection+1;
      }
        else if (knifeG.isTouching(rabbit)){
            gameState=END}

            
             } else if(gameState === END){
           
            jungle.velocityX = 0;
            rabbit.velocityY = 0;

            gameOver.visible = true;
            restart.visible = true;
            
            gameOver = createSprite(20,30);
            gameOver.addImage("gameOver",gameOverImg);
            gameOver.scale = 0.01;
        
             carrotG.destroyEach();
             knifeG.destroyEach();

             carrotG.setVelocityYEach(0);
             knifeG.setVelocityYEach(0);

             
  
             restart = createSprite(300,140);
             restart.addImage(restartImg);
             restart.scale=0.1;
        }

        drawSprites();
}

function createCarrot(){
    if (World.frameCount % 200 == 0) {
        var carrot = createSprite(200,20,10,10);
        carrot.y =Math.round(random(250, 350))
        carrot.addImage(carrotImg);
        carrot.scale=1.9;
        carrot.velocityX = 10;
        carrot.lifetime = 150;
        carrotG.add(carrot);

}}




function createKnife(){
    if (World.frameCount % 300 == 0) {
        var knife = createSprite(400,400,40,10);
        knife.y = Math.round(random(200, 350))
        knife.addImage(knifeImg);
        knife.scale=0.7;
        knife.velocityX = -3;
        knife.lifetime = 150;
        knifeG.add(knife);
}}