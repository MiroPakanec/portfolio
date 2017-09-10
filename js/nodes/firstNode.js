function FirstNode(title){

  FirstNode.super_.call(this, title);

  this.title = new NodeElement(this.position, "p", "");
  this.stage = new NodeStage(1);
}

inherits(FirstNode, Node);
