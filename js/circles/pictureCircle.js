function PictureCircle(amplitude, title, childNode, image){

  PictureCircle.super_.call(this, amplitude, title, childNode, null);

  this.image = image;
  this.style = new PictureCircleStyle();
}

inherits(PictureCircle, Circle);

PictureCircle.prototype.displayEllipse = function(){

  if(this.isHovered() && this.hasEjectedLines){

    this.style.displayHovered();
  }
  else{

    this.style.display();
  }

  imageMode(CENTER);
  image(this.image, this.x, this.y, this.radius * 2.8, this.radius * 2.8);
}

PictureCircle.prototype.getRandomRadius = function(){

  return random(35, 50);
}
