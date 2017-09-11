function IconHandler(){

  this.images = {};

  this.setup();
}

IconHandler.prototype.setup = function(){

  if(deviceHandler.isDesktop()){

    this.setupHighResolution();
    return;
  }

  if(deviceHandler.isTablet()){

    this.setupMediumResolution();
    return;
  }

  if(deviceHandler.isMobile()){

    this.setupLowResolution();
    return;
  }
}

IconHandler.prototype.setupHighResolution = function(){

  console.log("loading hight resolition icons...");

  this.images["about"] = loadImage("images/bubble-icons/about.png");
  this.images["projects"] = loadImage("images/bubble-icons/projects.png");
  this.images["work"] = loadImage("images/bubble-icons/work.png");
  this.images["education"] = loadImage("images/bubble-icons/education.png");
  this.images["contact"] = loadImage("images/bubble-icons/contact.png");
  this.images["viptransport"] = loadImage("images/bubble-icons/viptransport.png");
  this.images["spots"] = loadImage("images/bubble-icons/spots.png");
  this.images["gtl"] = loadImage("images/bubble-icons/gtl.png");
  this.images["paint"] = loadImage("images/bubble-icons/paint.png");
  this.images["eflats"] = loadImage("images/bubble-icons/eflats.png");
  this.images["siemens"] = loadImage("images/bubble-icons/siemens.png");
  this.images["nextstep"] = loadImage("images/bubble-icons/nextstep.png");
  this.images["cs"] = loadImage("images/bubble-icons/cs.png");
  this.images["electronics"] = loadImage("images/bubble-icons/electronics.png");
  this.images["software"] = loadImage("images/bubble-icons/software.png");
  this.images["highschool"] = loadImage("images/bubble-icons/highschool.png");
}

IconHandler.prototype.setupMediumResolution = function(){

  console.log("loading medium resolition icons...");

  this.images["about"] = loadImage("images/bubble-icons/about-md.png");
  this.images["projects"] = loadImage("images/bubble-icons/projects-md.png");
  this.images["work"] = loadImage("images/bubble-icons/work-md.png");
  this.images["education"] = loadImage("images/bubble-icons/education-md.png");
  this.images["contact"] = loadImage("images/bubble-icons/contact-md.png");
  this.images["viptransport"] = loadImage("images/bubble-icons/viptransport-md.png");
  this.images["spots"] = loadImage("images/bubble-icons/spots-md.png");
  this.images["gtl"] = loadImage("images/bubble-icons/gtl-md.png");
  this.images["paint"] = loadImage("images/bubble-icons/paint-md.png");
  this.images["eflats"] = loadImage("images/bubble-icons/eflats-md.png");
  this.images["siemens"] = loadImage("images/bubble-icons/siemens-md.png");
  this.images["nextstep"] = loadImage("images/bubble-icons/nextstep-md.png");
  this.images["cs"] = loadImage("images/bubble-icons/cs-md.png");
  this.images["electronics"] = loadImage("images/bubble-icons/electronics-md.png");
  this.images["software"] = loadImage("images/bubble-icons/software-md.png");
  this.images["highschool"] = loadImage("images/bubble-icons/highschool-md.png");
}

IconHandler.prototype.setupLowResolution = function(){

  console.log("loading low resolition icons...");

  this.images["about"] = loadImage("images/bubble-icons/about-sm.png");
  this.images["projects"] = loadImage("images/bubble-icons/projects-sm.png");
  this.images["work"] = loadImage("images/bubble-icons/work-sm.png");
  this.images["education"] = loadImage("images/bubble-icons/education-sm.png");
  this.images["contact"] = loadImage("images/bubble-icons/contact-sm.png");
  this.images["viptransport"] = loadImage("images/bubble-icons/viptransport-sm.png");
  this.images["spots"] = loadImage("images/bubble-icons/spots-sm.png");
  this.images["gtl"] = loadImage("images/bubble-icons/gtl-sm.png");
  this.images["paint"] = loadImage("images/bubble-icons/paint-sm.png");
  this.images["eflats"] = loadImage("images/bubble-icons/eflats-sm.png");
  this.images["siemens"] = loadImage("images/bubble-icons/siemens-sm.png");
  this.images["nextstep"] = loadImage("images/bubble-icons/nextstep-sm.png");
  this.images["cs"] = loadImage("images/bubble-icons/cs-sm.png");
  this.images["electronics"] = loadImage("images/bubble-icons/electronics-sm.png");
  this.images["software"] = loadImage("images/bubble-icons/software-sm.png");
  this.images["highschool"] = loadImage("images/bubble-icons/highschool-sm.png");
}

IconHandler.prototype.get = function(key){

  return this.images[key];
}
