function NodeStage(defaultStage){

  this.default = defaultStage;
  this.value = defaultStage;
}

NodeStage.prototype.set = function(value){

  if(value < 0 || value > 4) throw "Inccorrect stage value.";

  this.value = value;
}

NodeStage.prototype.update = function(){

  switch(this.value){

    case 0:{this.value = 1; break;}
    case 1:{this.value = 3; break;}
    case 2:{this.value = 3; break;}
    case 3:{this.value = 1; break;}
    case 4: break;
    default:{this.setToDefault();}
  }
}

NodeStage.prototype.setToDefault = function(){

  this.value = this.default;
}
