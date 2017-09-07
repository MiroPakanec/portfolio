function CircleFactory(){

  this.modalFactory = new ModalFactory();
}

CircleFactory.prototype.createMainCircles = function(childNodes, backNode){

  var color = [240, 30, 30];
  var titles = ["Projects", "Education", "Work Experience"];
  var leafTitles = ["About"];

  var amplitudes = this.getAmplitudes(4);
  var circleAmplitudes = amplitudes.slice(0, 3);
  var leafAmplitudes = amplitudes.slice(3, amplitudes.length);

  var modals = this.modalFactory.createMainModals();

  var circles = this.createCircles(titles, childNodes, circleAmplitudes, color);
  var leafCircles = this.createLeafCircles(leafTitles, [], leafAmplitudes, color, modals);

  circles.push(leafCircles[0]);
  return circles;
}

CircleFactory.prototype.createProjectCircles = function(backNode){

  var titles = ["VIPTransport", "Spots", "EFlats", "GT Library", "Paint"];
  var nodes = [];
  var amplitudes = this.getAmplitudes(5);
  var color = [220, 24, 93];

  var modals = this.modalFactory.createProjectModals();

  var circles = this.createLeafCircles(titles, nodes, amplitudes, color, modals);
  var backCircle = this.createBackCircle(backNode);

  circles.push(backCircle);
  return circles;
}

CircleFactory.prototype.createEducationCircles = function(backNode){

  var titles = ["Gymnazium", "UCN Elektronics and Networking", "UCN Computer Science", "UCN SOftware development"];
  var nodes = [];
  var amplitudes = this.getAmplitudes(4);
  var color = [24, 220, 48];

  var modals = this.modalFactory.createEducationModals();

  var circles = this.createLeafCircles(titles, nodes, amplitudes, color, modals);
  var backCircle = this.createBackCircle(backNode);

  circles.push(backCircle);
  return circles;
}

CircleFactory.prototype.createExperienceCircles = function(backNode){

  var titles = ["Siemencs Healthcare", "UCN Next step", "Spots IVS"];
  var nodes = [];
  var amplitudes = this.getAmplitudes(3);
  var color = [138, 37, 182];

  var modals = this.modalFactory.createExperienceModals();

  var circles = this.createLeafCircles(titles, nodes, amplitudes, color, modals);
  var backCircle = this.createBackCircle(backNode);

  circles.push(backCircle);
  return circles;
}

CircleFactory.prototype.createTestCircles = function(){

  var titles = ["Test1"];
  var nodes = [];
  var amplitudes = this.getAmplitudes(1);
  var color = [138, 37, 182];

  var modals = this.modalFactory.createExperienceModals();
  var circles = this.createLeafCircles(titles, nodes, amplitudes, color, modals);

  return circles;
}

CircleFactory.prototype.createCircles = function(titles, childNodes, amplitudes, color){

  var circles = [];
  var amount = titles.length;

  for (var i = 0; i < amount; i++) {

    var circle = this.createCircle(amplitudes[i], titles[i], childNodes[i], color);
    circles.push(circle);
  }

  return circles;
}

CircleFactory.prototype.createLeafCircles = function(titles, childNodes, amplitudes, color, modals){

  var circles = [];
  var amount = titles.length;

  for (var i = 0; i < amount; i++) {

    var circle = this.createLeafCircle(amplitudes[i], titles[i], childNodes[i], color, modals[i]);
    circles.push(circle);
  }

  return circles;
}

CircleFactory.prototype.createCircle = function(amplitude, title, node, color){

  return new Circle(amplitude, title, node, color);
}

CircleFactory.prototype.createLeafCircle = function(amplitude, title, node, color, modal){

  return new LeafCircle(amplitude, title, node, color, modal);
}

CircleFactory.prototype.createBackCircle = function(node){

  var amplitude = random(this.getMaxAmplitude(80), this.getMaxAmplitude(90));
  return new BackCircle(amplitude, "back", node, [100, 100, 100]);
}

CircleFactory.prototype.getAmplitudes = function(amount){

  var amplitudes = [];
  var availableAmplitude = this.getMaxAmplitude(70);
  var skip = availableAmplitude / amount;

  for (var i = 0; i < amount; i++) {

    var amplitude = skip * (i + 1);
    amplitudes.push(amplitude);
  }

  return amplitudes;
}

CircleFactory.prototype.getMaxAmplitude = function(amplitudePercent){

  var min = Math.min(height, width);
  return ((min / 2) / 100) * amplitudePercent;
}
