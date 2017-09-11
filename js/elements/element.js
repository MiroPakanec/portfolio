function Element(position, type, value){

  this.element = createElement(type, value);

  this.setId(getGuid());
  this.setValue(value);
  this.setPosition(position.x, position.y);

  this.element.style("font-size", "1.8vh");
  this.element.style("font-weight", "100");

  this.defaultMargin = 50;
}

Element.prototype.display = function(){

  this.element.show();
  this.element.position(this.x, this.y);
}

Element.prototype.hide = function(){

  this.element.hide();
}

Element.prototype.update = function(position){

  this.setPosition(position.x, position.y);
}

Element.prototype.setPosition = function(x, y){

  this.x = x - 50;
  this.y = y - this.defaultMargin + contHeight;
}

Element.prototype.getId = function(){

  return this.element.id();
}

Element.prototype.getValue = function(){

  return this.element.value();
}

Element.prototype.setId = function(value){

  this.element.id(value);
}

Element.prototype.setValue = function(value){

  this.element.value(value);
}
