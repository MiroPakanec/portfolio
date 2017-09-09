function PictureLeafCircle(amplitude, title, childNode, image, modal){

   PictureLeafCircle.super_.call(this, amplitude, title, childNode, image);

  this.modal = modal;
}

inherits(PictureLeafCircle, PictureCircle);

PictureLeafCircle.prototype.openDescription = function(){

  this.modal.load();
}
