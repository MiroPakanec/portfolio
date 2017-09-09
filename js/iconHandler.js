function IconHandler(){

  this.images = {};

  this.setup();
}

IconHandler.prototype.setup = function(){

  this.images["about"] = loadImage("images/glyph/opt/about.png");
  this.images["projects"] = loadImage("images/glyph/opt/projects.png");
  this.images["work"] = loadImage("images/glyph/opt/work.png");
  this.images["education"] = loadImage("images/glyph/opt/education.png");
  this.images["contact"] = loadImage("images/glyph/opt/contact.png");
  this.images["viptransport"] = loadImage("images/glyph/opt/viptransport.png");
  this.images["spots"] = loadImage("images/glyph/opt/spots.png");
  this.images["gtl"] = loadImage("images/glyph/opt/gtl.png");
  this.images["paint"] = loadImage("images/glyph/opt/paint.png");
  this.images["eflats"] = loadImage("images/glyph/opt/eflats.png");

}

IconHandler.prototype.get = function(key){

  return this.images[key];
}
