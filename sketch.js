var playerBubble;
var enemyBuble;
var bullets=[];
var enemies=[];
var score=0;

function setup(){
  var canvas=createCanvas(400,400);
  playerBubble=createSprite(200,380,40,40);
  //enemyGroup=new Group();
  for (var i = 0; i < 6; i++) {
    enemies[i] = new EnemyBubble(i * 60 + 60, 40);
  }
}

function draw(){
background(0);
text(score,350,50);
playerBubble.shapeColor="green"
for (var i = 0; i < bullets.length; i++) {
  bullets[i].show();
  bullets[i].move();
  for (var j = 0; j < enemies.length; j++) {
    if (bullets[i].hits(enemies[j])) {
      enemies[j].disappear();
   score=score+1;
    }
  }
}
if (keyIsDown(LEFT_ARROW)) {
  playerBubble.velocityX=-5;
 
} else if(keyIsDown(RIGHT_ARROW)){
  playerBubble.velocityX=5;
}
//spawnEnemyBubbles();
var edge=false;
for (var i = 0; i < enemies.length; i++) {
  enemies[i].show();
  enemies[i].move();
  if (enemies[i].x > width || enemies[i].x < 0) {
    edge = true;
  }
  if (enemies[i].toDelete) {
    enemies.splice(i,1);  
  }

  if (edge) {
    for (var i = 0; i < enemies.length; i++) {
      enemies[i].shiftDown();
    }
  }
 // enemies[i].move();
}

if (playerBubble.x<0 || playerBubble.x>400) {
  playerBubble.lifetime=0;
  noLoop();
  background(255);
  text("Game Over!!",200,200);
  text(score,300,300);
}
drawSprites();
}

function keyPressed(){
  if (key ===' ') {
    var bullet=new Bullet(playerBubble.x,playerBubble.y);
    bullets.push(bullet);
  }
 
  
}
/*function spawnEnemyBubbles() {
  if (frameCount%40===0) {
    enemyBubble=createSprite(random(100,400),150,30,30);
    enemyBubble.velocityX=random(-5,5);
    enemyBubble.velocityY=random(-5,5);
    enemyGroup.add(enemyBubble);
  }
}*/

