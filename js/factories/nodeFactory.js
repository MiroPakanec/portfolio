function NodeFactory() {

  this.circleFactory = new CircleFactory();
}

NodeFactory.prototype.createProjectNode = function(rootNode){

  var circles = this.circleFactory.createProjectCircles(rootNode);
  var node = this.createNode("Projects", circles);

  node.addCircles(circles);
  return node;
}

NodeFactory.prototype.createProjectNodeOptimized = function(rootNode){

  var circles = this.circleFactory.createProjectCirclesOptimized(rootNode);
  var node = this.createNode("Projects", circles);

  node.addCircles(circles);
  return node;
}

NodeFactory.prototype.createEducationNode = function(rootNode){

  var circles = this.circleFactory.createEducationCircles(rootNode);
  var node = this.createNode("Education", circles);

  node.addCircles(circles);
  return node;
}

NodeFactory.prototype.createEducationNodeOptimized = function(rootNode){

  var circles = this.circleFactory.createEducationCirclesOptimized(rootNode);
  var node = this.createNode("Education", circles);

  node.addCircles(circles);
  return node;
}

NodeFactory.prototype.createExperienceNode = function(rootNode){

  var circles = this.circleFactory.createExperienceCircles(rootNode);
  var node = this.createNode("Work experience", circles);

  node.addCircles(circles);
  return node;
}

NodeFactory.prototype.createExperienceNodeOptimized = function(rootNode){

  var circles = this.circleFactory.createExperienceCirclesOptimized(rootNode);
  var node = this.createNode("Work experience", circles);

  node.addCircles(circles);
  return node;
}

NodeFactory.prototype.createRootNode = function(){

  return new FirstNode("Start by clicking here");
}

NodeFactory.prototype.createNode = function(title, circles){

  var node = new Node(title);
  node.addCircles(circles);

  return node;
}
