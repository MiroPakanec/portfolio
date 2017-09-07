function BackCircle(amplitude, title, childNode, color){

  BackCircle.super_.call(this, amplitude, title, childNode, color);
}

inherits(BackCircle, Circle);

BackCircle.prototype.getRandomRadius = function(){

  return 15;
}
