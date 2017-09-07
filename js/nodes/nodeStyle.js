function NodeStyle(color, frameColor){

  NodeStyle.super_.call(this, color, frameColor);

  this.opacityChangePeriod = 50;
  this.opacityCounter = 0;
}

inherits(NodeStyle, Style);

NodeStyle.prototype.update = function(){

  this.opacity = this.getTwinklingOpacity();
  this.updateOpacityCounter();
}

NodeStyle.prototype.getTwinklingOpacity = function(){

  var value = this.opacityCounter % this.opacityChangePeriod;

  if(this.opacityCounter % (this.opacityChangePeriod * 2) >= this.opacityChangePeriod){
    var opacity = map(value, 0, 49, 0, 255);
  }
  else{
    var opacity = map(value, 0, 49, 255, 0);
  }

  if(opacity < 100)
    return 100;

  return opacity;
}

NodeStyle.prototype.updateOpacityCounter = function(){

  this.opacityCounter++;

  if(this.opacityCounter >= 1000000){
    this.opacityCounter = 0;
  }
}
