function NodeTreeFactory(){

  this.nodeFactory = new NodeFactory();
  this.circleFactory = new CircleFactory();
}

NodeTreeFactory.prototype.create = function(){

  var rootNode = this.nodeFactory.createRootNode();
  var projectNode = this.nodeFactory.createProjectNode(rootNode);
  var educationNode = this.nodeFactory.createEducationNode(rootNode);
  var experienceNode = this.nodeFactory.createExperienceNode(rootNode);

  var nodeArray = [projectNode, educationNode, experienceNode];
  var mainCircles = this.circleFactory.createMainCircles(nodeArray ,null);

  rootNode.addCircles(mainCircles);
  rootNode.title.display();

  return rootNode;
}

NodeTreeFactory.prototype.createTest = function(){

  var rootNode = this.nodeFactory.createRootNode();

  var nodeArray = [];
  var testCircles = this.circleFactory.createTestCircles(nodeArray ,null);

  rootNode.addCircles(testCircles);
  rootNode.title.display();

  return rootNode;
}
