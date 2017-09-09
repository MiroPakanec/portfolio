  var height;
  var width;

  var node;
  var canvasEnabled;
  var iconHandler;

  function preload(){

    iconHandler = new IconHandler();
  }

  function setup(){

    canvasEnabled = true;
    frameRate(30);

    setCanvas();
    setNode();
  }

  function draw(){

    background(235);

    swtichNodes();
    node.update();
    node.display();
  }

  function swtichNodes(){

    if(node.getStageValue() == 4){

      node = node.getNextNode();
      node.title.display();
    }
  }

  function setCanvas(){

    height = $(window).height();
    width = $(window).width();

    createCanvas(width, height);
  }

  function setNode(){

    var nodeTreeFactory = new NodeTreeFactory();
    node = nodeTreeFactory.create();
  }

  function resize(){

    var position = createVector(width/2, height/2);
    node.resize(position);
  }
