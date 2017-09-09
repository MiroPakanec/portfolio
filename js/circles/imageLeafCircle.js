function ImageLeafCircle(amplitude, title, childNode, image, color, modal){

  ImageLeafCircle.super_.call(this, amplitude, title, childNode, image, color);

  this.modal = modal;
}

inherits(ImageLeafCircle, ImageCircle);

ImageLeafCircle.prototype.openDescription = function(){

  this.modal.load();
}
