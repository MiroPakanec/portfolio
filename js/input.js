function Input(){

  this.x = mouseX;
  this.y = mouseY;
}

Input.prototype.getX = function(){

  return this.isMobile() ? touchX : mouseX;
}

Input.prototype.getY = function(){

  return this.isMobile() ? touchY : mouseY;
}

Input.prototype.isMobile = function(){

  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}
