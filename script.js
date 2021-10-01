
class Ball{
  constructor(x,y,vy){
    this.x = x;
    this.y = y;
    this.vy = vy;
  }

  drawBall(){
    ellipse(this.x,this.y,20,20);

    this.y = this.y + this.vy;

     if(this.y < 0 || this.y > 400){
      this.y = 400;
    }
  }
}

var ball, ball1;

function setup() {
  createCanvas(400, 400);

  ball = new Ball(10, 0,5);
  ball1 = new Ball(200, 0,3);
  
}

function draw() {
    background(220);

    ball.drawBall();
    ball1.drawBall();
}