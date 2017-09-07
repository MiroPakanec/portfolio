function Cursor(){

  this.default = "default";
  this.hover = "pointer";
}

Cursor.prototype.display = function(isHovered){

  isHovered ? this.setHover() : this.setDefault();
}

Cursor.prototype.getDefault = function(){

  return this.default;
}

Cursor.prototype.getHover = function(){

  return this.hover;
}

Cursor.prototype.setDefault = function(){

  document.body.style.cursor = this.getDefault();
}

Cursor.prototype.setHover = function(){

  document.body.style.cursor = this.getHover();
}
