function Style(color, frameColor){

  this.color = color;
  this.frameColor = frameColor;
  this.opacity = 0;
}

Style.prototype.display = function(){

  fill(this.color, this.color, this.color, this.opacity);
  stroke(this.frameColor);
}

Style.prototype.increaseOpacity = function(amount){

  this.opacity += amount;
}

Style.prototype.setOpacity = function(amount){

  if(amount < 0 || amount > 255) throw "Opacity has to be between 0 and 255.";
  this.opacity = amount;
}
