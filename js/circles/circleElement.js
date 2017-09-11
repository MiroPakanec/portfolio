function CircleElement(position, type, value, radius){

  CircleElement.super_.call(this, position, type, value);

  this.hide();
  this.margin = radius + 30;
  //this.opacity = 0;
}

inherits(CircleElement, Element);

CircleElement.prototype.display = function(screenCenterPoint, circleCenterPoint){

  var x1 = screenCenterPoint.x + circleCenterPoint.x;
  var y1 = screenCenterPoint.y + circleCenterPoint.y;
  var v1 = createVector(x1, y1);

  var centerPointsVector = v1.sub(screenCenterPoint);
  var elementWidth = this.element.style("width").slice(0, -2);

  var x = centerPointsVector.x - elementWidth /2;
  var y = centerPointsVector.y - this.margin + contHeight;

  //this.element.style("color", "rgba(100,100,100, "+opacity+")");
  this.element.show();
  this.element.position(x, y);
}

CircleElement.prototype.setOpacity = function(opacity){

  var opacityMapped = map(opacity, 0, 100, 0, 1);
  this.element.style("color", "rgba(100,100,100, "+opacityMapped+")");
}

CircleElement.prototype.reset = function(){

  this.element.setPosition(-100,-100);
}
