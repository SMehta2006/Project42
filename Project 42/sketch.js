var hr,mn,sc;

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
}

function draw() {

  background(0);
  

translate(225,225)
rotate (-90);

  hr = hour();
  mn = minute();
  sc = second();
  
  strokeWeight(8);
  stroke("red");
  noFill();
  var scAngle = map(sc,0,60,0,360);
  arc(0,0,320,320,0,scAngle);
  
  stroke("blue");
  var mnAngle = map(mn,0,60,0,360);
  arc(0,0,300,300,0,mnAngle);
  
  stroke("green");
  var hrAngle = map(hr%12,0,12,-0,360);
  arc(0,0,280,280,0,hrAngle);
  
  push();
  rotate(scAngle);
  stroke("red");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(mnAngle);
  stroke("blue");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(hrAngle);
  stroke("green");
  line(0,0,50,0);
  pop();
  }
