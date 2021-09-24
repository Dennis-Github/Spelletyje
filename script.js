var x,y,vx,vy;
function setup() {
  createCanvas(400, 400);
  
  x = 200;
  y = 0;
  vx = 0;
  vy = 5;
}

function draw() {
  background(220);
  
  ellipse(x,y,50,50);
  y = y + vy;


  if(y < 0 || y > 400){
    y = 400;
  }
}