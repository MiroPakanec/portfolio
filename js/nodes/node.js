function Node(title){

  this.id = getGuid();
  this.position = createVector(width/2, height/2);
  this.radius = 5;
  this.circles = [];

  this.style = new NodeStyle(135, 80);
  this.stage = new NodeStage(1);
  this.title = new NodeElement(this.position, "p", title);
  this.cursor = new Cursor();

  this.wasClicked = false;
  this.wasCircleClicked = false;
}

//API
Node.prototype.update = function(){

  this.style.update();
  this.title.update(this.position);
  this.updateClick();
}

//API
Node.prototype.display = function(){

  this.cursor.display(this.isHovered() || this.isCircleHovered());

  switch(this.stage.value){

    case 0: this.displayStageZero(); break;
    case 1: this.displayStageOne(); break;
    case 2: this.displayStageTwo(); break;
    case 3: this.displayStageThree(); break;
    case 4: this.displayStageZero(); break;
  }
}

//API
Node.prototype.getNextNode = function(){

  if(this.nextNode == null) throw "next node cannot be null.";

  return this.nextNode;
}

//API
Node.prototype.addCircles = function(circles){

  var self = this;
  circles.forEach(function(circle){

    self.circles.push(circle);
  })
}

//API
Node.prototype.getStageValue = function(){

  return this.stage.value;
}

//API
Node.prototype.resize = function(newPosition){

  this.position.set(newPosition);

  this.circles.forEach(function(circle){

    circle.position.set(newPosition);
    circle.defaultPosition.set(newPosition);

    if(circle.childNode == null) return;

    circle.childNode.position.set(newPosition);
  });
}

Node.prototype.displayNode = function(withTitle){

  withTitle ? this.title.display() : this.title.hide();
  this.style.display();
  ellipse(width/2, height/2, this.radius * 2, this.radius * 2);
}

Node.prototype.displayStageZero = function(){

  this.displayNode(true);
  this.orbitAll();
}

Node.prototype.displayStageOne = function(){

  this.displayNode(true);
  this.updateAll(true);

  this.wasCircleClicked = false;

  if(this.areLinesEjected())
    this.stage.set(2);
}

Node.prototype.displayStageTwo = function(){

  this.displayNode(true);
  this.updateAll(true);
}

Node.prototype.displayStageThree = function(){

  var self = this;

  this.displayNode(false);
  this.updateAll(false);

  if(this.areLinesSniffed()){

    if(this.wasCircleClicked){

      this.stage.set(4);
      return;
    }

    this.stage.set(0);
  }
}

Node.prototype.updateClick = function(){

  if(this.isNodeClicked()){

    this.stage.update();
    return;
  }

  if(this.isCircleClicked()){

    this.wasCircleClicked = true;
    this.stage.set(3);
  }
}

Node.prototype.updateAll = function(isEjecting){

  this.circles.forEach(function(circle){

    circle.orbit();

    isEjecting ? circle.eject() : circle.sniff();

    circle.display();
  });
}

Node.prototype.orbitAll = function(){

  this.circles.forEach(function(circle){

    circle.orbit();
  });
}

Node.prototype.areLinesEjected = function(){

  return this.circles[0].hasEjectedLines;
}

Node.prototype.areLinesSniffed = function(){

  return this.circles[0].hasSniffedLines;
}

Node.prototype.isHovered = function(){

  var d = dist(mouseX, mouseY, this.position.x, this.position.y);
  return d <= this.radius ? true : false;
}

Node.prototype.isCircleHovered = function(){

  var isCircleHovered = false;
  this.circles.forEach(function(circle){

    if(circle.isHovered()){
      isCircleHovered = true;
    }
  });

  return isCircleHovered;
}

Node.prototype.isMousePressed = function(){

  if(canvasEnabled == false) return false;

  if(mouseIsPressed == false){

    this.wasClicked = false;
    return false;
  }

  return true;
}

Node.prototype.isNodeClicked = function(){

  if(this.isHovered() == false || this.isMousePressed() == false || this.wasClicked)
    return false;

  this.wasClicked = true;
  return true;
}

Node.prototype.isCircleClicked = function(){

  var self = this;
  var clicked = false;

  this.circles.forEach(function(circle){

    if(circle.isClicked()){

      if(circle instanceof LeafCircle || circle instanceof ImageLeafCircle || circle instanceof PictureLeafCircle){

        circle.openDescription();
        return;
      }

      self.nextNode = circle.childNode;
      self.nextNode.stage.set(1);
      clicked = true;
    }
  });

  return clicked;
}
