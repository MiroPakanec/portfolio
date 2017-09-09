function ImageCircle(amplitude, title, childNode, image, color){

  ImageCircle.super_.call(this, amplitude, title, childNode, color);

  this.image = image;
  this.style = new ImageCircleStyle(color);
}

inherits(ImageCircle, Circle);

ImageCircle.prototype.displayEllipse = function(){

  if(this.isHovered() && this.hasEjectedLines){

    this.style.displayHovered();
  }
  else{

    this.style.display();
  }

  ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  imageMode(CENTER);
  image(this.image, this.x, this.y, this.radius * 2.8, this.radius * 2.8);
}

ImageCircle.prototype.getRandomRadius = function(){

  return random(20, 30);
}
