function Slider(rootElement){

  this.rootElement = rootElement;
}

Slider.prototype.load = function(){

  $(this.rootElement).slick({
    appendArrows : "#gallery-arrows",
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $(".slick-next").trigger("click");
  $(".slick-arrow").html("");
}
