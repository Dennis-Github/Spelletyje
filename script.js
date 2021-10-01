
class Ball {
  constructor(x, y, vy) {
    this.x = x;
    this.y = y;
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

  ball = new Ball(10, -20, 2);
  ball1 = new Ball(200, -80, 3);
  ball2 = new Ball(300, -60, 1);
  balls.push(ball);
  balls.push(ball1);
  balls.push(ball2);

}

function draw() {
  background(220);

  balls.forEach((b) => {
    b.drawBall();
  })
}