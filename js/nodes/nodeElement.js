function NodeElement(position, type, value){

  NodeElement.super_.call(this, position, type, value);

  this.element.size(100,100);
  this.element.attribute("align", "center");
  this.element.addClass("text-standard");
  this.element.addClass("text-node");

  this.defaultMargin = 40;
  this.hide();
}

inherits(NodeElement, Element);
