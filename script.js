class Ball {
  constructor(vy) {
    this.x = random(width);
    this.y = -20;
    this.w = 20;
    this.vy = vy;
    this.c = "green";
  }

  drawBall() {
    fill(this.c);
    rect(this.x, this.y, 20, 20);

    this.y = this.y + this.vy;

    if (this.y < -100 || this.y > 400) {
      this.y = 400;
    }
  }

  checkCollision() {
    if (this.y + 20 > 350) {
      if (mouseX - 70 < this.x + this.w && mouseX - 70 + 140 > this.x) {
        //jouw bots code hier        
        score++;
        let idx = balls.indexOf(this);
        balls.splice(idx, 1);
      }
    }

    if (this.y > 399) {
      let idx = balls.indexOf(this);
      balls.splice(idx, 1);
      gameState = "end";
      balls = []
      score = 0;
    } 
      

  }
}

var score = 0;
var balls = [];
var song = [];
var gameState = 'start';
var spr;
var anim;

function preload() {
  song = loadSound("Rainbow.mp3");  
  anim = loadAnimation("sprite.png");
}



function setup() {
  createCanvas(400, 400); 
  spr = createSprite(width/2, height/2);
  spr.addAnimation("default", anim);
}

function draw() {
  background(220);
  fill("orange")   
  drawSprites();
  
  if (gameState === 'start') {
    fill('purple');
    textAlign (CENTER);
    text('Press space to play', width / 2, height / 2);
  }

  if (gameState == "play"){
    game();
  }  
 
  if (gameState === 'end') {
    text('game over, press space to start over', width / 2, height / 2);
  }    
}

  

function game(){
  text('You are playing the game now, press down arrow to stop', width / 2, 100);
  text("Score: " + score, 10, 20);    
   rect(mouseX - 70, 350, 140, 30)
   if (frameCount % 80 == 0) {
      balls.push(new Ball(random(6)));
    }  

  balls.forEach((b) => {
    b.drawBall();
    b.checkCollision();      
  });
}

function keyPressed() {  
  if (keyCode === 40){
    gameState = 'end';
    song.stop();
  }
    
  if(keyCode == 32){
    gameState = "play";
    song.play();
  }
    
  }



