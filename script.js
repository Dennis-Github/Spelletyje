let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 5;

let r = 25;
var ball1, ball2, ball3;

function setup() {
  createCanvas(640, 360);

  ball1 = new Ball(30,200,50,50,5,5,"red")
  ball1 = new Ball(120,210,50,50,3,3,"blue")
  ball1 = new Ball(200,150,50,50,1,1,"green")

}

function draw() {
  background(225);
  ball1.draw();
  ball2.draw();
  ball3.draw();
  ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }


}