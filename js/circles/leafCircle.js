function LeafCircle(amplitude, title, childNode, color, modal){

  LeafCircle.super_.call(this, amplitude, title, childNode, color);

  this.modal = modal;
}

inherits(LeafCircle, Circle);

LeafCircle.prototype.openDescription = function(){

  this.modal.load();
}
