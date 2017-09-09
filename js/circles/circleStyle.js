function CircleStyle(color){

  CircleStyle.super_.call(this, color, 0);

  this.maxOpacity = 150;
}

inherits(CircleStyle, Style);

CircleStyle.prototype.display = function(){

  fill(this.color[0], this.color[1], this.color[2], this.opacity);
  //tint(this.color[0], this.color[1], this.color[2], this.opacity);
  noStroke();
}

CircleStyle.prototype.displayHovered = function(){

  var hoverOpacity = this.opacity + 50;

  fill(this.color[0], this.color[1], this.color[2], hoverOpacity);
  //tint(this.color[0], this.color[1], this.color[2], hoverOpacity);
  noStroke();
}

CircleStyle.prototype.fadeIn = function(speed){

  if(speed < 0) throw "Fade in speed must be positive, use fadeOut() for negative effect.";

  if(this.opacity < (this.maxOpacity - speed)){

    this.increaseOpacity(speed);
  }
}

CircleStyle.prototype.fadeOut = function(speed){

  if(speed < 0) throw "Fade out speed must be positive, use fadeIn() for negative effect.";

  if(this.opacity > 0){

    speed *= -1;
    this.increaseOpacity(speed);
  }
}
