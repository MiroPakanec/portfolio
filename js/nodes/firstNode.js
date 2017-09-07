function FirstNode(title){

  FirstNode.super_.call(this, title);

  this.stage = new NodeStage(1);
}

inherits(FirstNode, Node);
