function Modal(url){

  this.id = "#modal";
  this.triggerButtonId = "#btn-modal";

  this.wasClicked = false;

  this.slider = new Slider(".gallery");
  this.url = url;
}

Modal.prototype.load = function(){

  var self = this;

  if(self.wasClicked || canvasEnabled == false) return;
  self.wasClicked = true;

  $.get(self.url, { "_": $.now() }, function(response) {
       self.loadHtml(response);
       self.trigger();
       self.slider.load();
       self.wasClicked = false;
  });
}

Modal.prototype.loadHtml = function(response){

  $(this.id).html(response);
}

Modal.prototype.trigger = function(){

  $(this.triggerButtonId).trigger("click");
}
