var hour1, min, sec, hourArc, secArc, minArc, minSec, hourAngle, minAngle , secAngle; 

function setup() {
  createCanvas(400,400);


  angleMode(DEGREES);

}

function draw() 
{
  background(0);  

  hour1 = hour();
  //hour1 -= 12;
  sec = second();
  min = minute();
  
  secAngle = map(sec, 0, 60, 0, 360);
  hourAngle = map(hour1%12, 0, 12, 0, 360);
  console.log(hourAngle);
  minAngle = map(min, 0, 60, 0, 360);

  translate(200, 200);
  push();
  rotate(secAngle);
  stroke(0, 255, 0);
  line(0, 0 , 100, 0);
  pop();
  push();
  rotate(hourAngle);
  stroke(0, 0, 255);
  line(0, 0 , 50, 0);
  pop();
  push();
  rotate(minAngle);
  stroke(255, 0, 0);
  line(0, 0 , 75, 0);
  pop();

  stroke(0, 255 , 0);
  noFill();
  arc(0, 0, 200, 200, 270, secAngle);
  stroke(0, 0 , 255);
  noFill();
  arc(0, 0, 170, 170, 270, hourAngle);
  stroke(255, 0 , 0);
  noFill();
  arc(0, 0, 185, 185, 270, minAngle);

  drawSprites();
}