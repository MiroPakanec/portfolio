  var height;
  var width;
  var contHeight;

  var node;
  var canvasEnabled;

  var iconHandler;
  var deviceHandler;

  var cvs;

  function preload(){

    deviceHandler =  new DeviceHandler();
    iconHandler = new IconHandler();
  }

  function setup(){

    canvasEnabled = true;
    setContHeight();
    frameRate(30);

    setCanvas();
    setNode();
  }

  function draw(){

    setBackground();

    swtichNodes();
    node.update();
    node.display();
  }

  function setBackground(){

    background(235);

    noFill();
    stroke(150,150,150);
    strokeWeight(0.3);
    var min = Math.min(width, height);
    var diameter = min/100 * 90;
    ellipse(width/2, height/2, diameter, diameter);
  }

  function setContHeight(){

    contHeight = $(".container").height();
  }

  function swtichNodes(){

    if(node.getStageValue() == 4){

      node = node.getNextNode();
      node.title.display();
      resize();
    }
  }

  function setCanvas(){

    height = $(window).height() - (contHeight / 100 * 150);
    width = $(window).width();

    cvs = createCanvas(width, height);
    cvs.parent("canvas");
  }

  function setNode(){

    var nodeTreeFactory = new NodeTreeFactory();

    if(deviceHandler.isMobile()){

      $(".footer").removeClass("isHidden");
      node = nodeTreeFactory.createOptimized();
      return;
    }

    node = nodeTreeFactory.create();
  }

  function resize(){

    var position = createVector(width/2, height/2);
    node.resize(position);
    setContHeight();
  }
