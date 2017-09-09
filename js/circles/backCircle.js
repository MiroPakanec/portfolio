function BackCircle(amplitude, title, childNode, color){

  BackCircle.super_.call(this, amplitude, title, childNode, color);

  this.velocityLimit = 0.001;
}

inherits(BackCircle, Circle);

BackCircle.prototype.getRandomRadius = function(){

  return 10;
}
