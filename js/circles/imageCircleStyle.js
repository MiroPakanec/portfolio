function ImageCircleStyle(color){

  ImageCircleStyle.super_.call(this, color);


  this.maxOpacity = 250;
}

inherits(ImageCircleStyle, CircleStyle);

ImageCircleStyle.prototype.display = function(){

  var strokeOpacity = map(this.opacity, 0, 150, 0, 255);
  var fillOpacity = map(this.opacity, 0, this.maxOpacity, 0, 20);

  tint(255, this.opacity);
  fill(this.color[0], this.color[1], this.color[2], fillOpacity);
  stroke(this.color[0], this.color[1], this.color[2], strokeOpacity);
}

ImageCircleStyle.prototype.displayHovered = function(){

  var strokeOpacity = map(this.opacity, 0, this.maxOpacity, 0, 255);
  var fillOpacity = map(this.opacity, 0, this.maxOpacity, 0, 40);

  tint(255, this.opacity);
  fill(this.color[0], this.color[1], this.color[2], fillOpacity);
  stroke(this.color[0], this.color[1], this.color[2], strokeOpacity);
}
