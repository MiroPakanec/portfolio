function Element(position, type, value){

  this.element = createElement(type, value);
  this.element.size(100,100);
  this.element.attribute("align", "center");
  this.element.addClass("text-standard");
  this.element.id(getGuid());

  this.setPosition(position.x, position.y);
  this.value = value;
  this.defaultMargin = 100;
}

Element.prototype.display = function(){

  this.element.position(this.x, this.y);
}

Element.prototype.update = function(position){

  this.setPosition(position.x, position.y);
}

Element.prototype.setPosition = function(x, y){

  this.x = x - 50;
  this.y = y - this.defaultMargin;
}

Element.prototype.getId = function(){

  return this.element.id();
}
