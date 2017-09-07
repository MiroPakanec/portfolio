function Circle(amplitude, title, childNode, color){

  this.style = new CircleStyle(color);

  this.x = 0;
  this.y = 0;
  this.position = createVector(width/2, height/2);
  this.defaultPosition = createVector(width/2, height/2);

  this.radius = this.getRandomRadius();

  this.mass = 5 * this.radius;
  this.amplitude = amplitude;
  this.angle = 0.0;
  this.angularVelocity = 0;
  this.velocityLimit = random(0.005, 0.008);
  this.angularAcceleration = 0.000001 * this.mass;

  this.percentEjected = 0;
  this.hasEjectedLines = false;
  this.hasSniffedLines = true;

  this.title = new CircleElement(this.position, "p", title, this.radius);

  this.childNode = childNode;
}

Circle.prototype.display = function(){

  push();
  translate(this.position.x, this.position.y);

  this.displayLine();

  if(this.hasEjectedLines || this.hasSniffedLines == false){

    this.adjustOpacity();
    this.displayEllipse();
    this.displayElement();
  }

  pop();
}

Circle.prototype.displayLine = function(){

  stroke(100);
  strokeWeight(0.5);

  var lineEnd = this.getLineEndPoint();
  line(lineEnd.x, lineEnd.y, 0,0);
}

Circle.prototype.displayEllipse = function(){

  if(this.isHovered() && this.hasEjectedLines){

    this.style.displayHovered();
  }
  else{

    this.style.display();
  }

  ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
}

Circle.prototype.updateOpacity = function(){

  if(this.isHovered() && this.style.opacity > 0){

    this.style.increaseOpacity(50);
    return;
  }

  this.style.increaseOpacity(-50);
}

Circle.prototype.displayElement = function(){

  var circleCenterPoint = createVector(this.position.x + this.x, this.position.y + this.y);

  this.title.setOpacity(this.style.opacity);
  this.title.display(this.position, circleCenterPoint);
}

Circle.prototype.eject = function(){

  if(this.percentEjected < 100){

    var increment = 4.4 - this.percentEjected / 25;
    this.percentEjected += increment;
    return;
  }

  this.hasEjectedLines = true;
  this.hasSniffedLines = false;
}

Circle.prototype.sniff = function(){

  this.hasSniffedLines = false;
  this.hasEjectedLines = false;

  if(this.percentEjected > 0){

    this.percentEjected -= 3;
    return;
  }

  this.title.hide();
  this.hasSniffedLines = true;
}

Circle.prototype.orbit = function(){

  var limit = this.getVelocityLimit();

  this.angularVelocity += this.angularAcceleration * 100000;
  this.angularVelocity = constrain(this.angularVelocity, 0.001, limit);
  this.angle += this.angularVelocity;

  this.x = this.amplitude * cos(this.angle);
  this.y = this.amplitude * sin(this.angle);
}

Circle.prototype.getVelocityLimit = function(){

  var limit = this.velocityLimit;

  if(this.isHovered()){
    return limit /= 10;
  }

  return limit;
}

Circle.prototype.reset = function(){

  this.position = this.defaultPosition;
  this.angle = 0.0;
  this.x = 0;
  this.y = 0;

  this.radius = this.getRandomRadius();

  this.style.setOpacity(0);
  this.title.reset();

  this.percentEjected = 0;

  this.hasEjectedLines = false;
  this.hasSniffedLines = true;
}

Circle.prototype.adjustOpacity = function(){

  if(this.hasEjectedLines){
    this.style.fadeIn(5);
    return;
  }

  if(this.hasSniffedLines == false){
    this.style.fadeOut(10);
  }
}

Circle.prototype.getLineEndPoint = function(){

  return createVector(this.x, this.y).div(100).mult(this.percentEjected);
}

Circle.prototype.isHovered = function(){

  var d = dist(this.x, this.y, mouseX - width/2, mouseY - height/2);
  return (d <= this.radius)?true:false;
}

Circle.prototype.isClicked = function(){

  return this.isHovered() && mouseIsPressed && canvasEnabled ? true : false;
}

Circle.prototype.getRandomRadius = function(){

  return random(10, 30);
}

Circle.prototype.getCirclePosition = function(){

  return createVector(this.position.x + this.x, this.position.y + this.y);
}
