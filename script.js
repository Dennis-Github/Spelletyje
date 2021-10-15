let score = 0;
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
    }

  }
}


var balls = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill("orange")
  rect(mouseX - 70, 350, 140, 30)
  text("Score: " + score, 10, 20);


  if (frameCount % 80 == 0) {
    balls.push(new Ball(random(6)));
  }

  balls.forEach((b) => {
    b.drawBall();
    b.checkCollision();

  })
}