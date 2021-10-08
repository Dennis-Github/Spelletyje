
class Ball {
  constructor(vy) {
    this.x = random(width);
    this.y = -20;
    this.vy = vy;
  }

  drawBall() {
    ellipse(this.x, this.y, 20, 20);

    this.y = this.y + this.vy;

    if (this.y < -100 || this.y > 400) {
      this.y = 400;
    }
  }
}

var balls = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if(frameCount % 80 == 0){
    balls.push(new Ball(random(10)));   
  }

  balls.forEach((b) => {
    b.drawBall();
  })
}