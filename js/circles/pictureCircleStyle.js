function PictureCircleStyle(){

  PictureCircleStyle.super_.call(this, 255);

  this.maxOpacity = 250;
}

inherits(PictureCircleStyle, CircleStyle);

PictureCircleStyle.prototype.display = function(){

  tint(255, this.opacity);
  noStroke();
}

PictureCircleStyle.prototype.displayHovered = function(){

  this.display();
}
