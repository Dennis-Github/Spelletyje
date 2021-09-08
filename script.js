var x, y;

function setup() {
	createCanvas(500, 400);

  x = 0;
  y = 200;
}

function draw() {
	background(225);
  
  ellipse(x,y,50,50);
  x = x + 5;

  if(x > 500){
    x = 0;
  }
}
