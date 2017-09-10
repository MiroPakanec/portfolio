function CircleFactory(){

  this.modalFactory = new ModalFactory();
}

CircleFactory.prototype.createMainCircles = function(childNodes, backNode){

  var color = [240, 30, 30];
  var titles = ["Projects", "Education", "Work Experience"];
  var leafPictureTitles = ["About"];
  var leafImagesTitles = ["Contact"];

  var images = ["projects", "education", "work"];
  var leafPictures= ["about"];
  var leafImages = ["contact"];

  var amplitudes = this.getAmplitudes(5);
  var circleAmplitudes = amplitudes.slice(0, 3);
  var leafPictureAmplitudes = amplitudes.slice(3, 4);
  var leafImageAmplitudes = amplitudes.slice(4, amplitudes.length);

  var modals = this.modalFactory.createMainModals();
  var aboutModal = [modals["about"]];
  var contactModel = [modals["contact"]];

  var circles = this.createImageCircles(titles, childNodes, circleAmplitudes, color, images);
  var leafPictureCircles = this.createLeafPictureCircles(leafPictureTitles, [], leafPictureAmplitudes, aboutModal, leafPictures);
  var leafImageCircles = this.createLeafImageCircles(leafImagesTitles, [], leafImageAmplitudes, color, contactModel, leafImages);

  var circles = circles.concat(leafPictureCircles);
  var circles = circles.concat(leafImageCircles);

  return circles;
}

CircleFactory.prototype.createProjectCircles = function(backNode){

  var titles = ["VIPTransport", "Spots"];
  var leafImagesTitles = ["Georgia Tech Library", "Paint", "E-Flats"];
  var color = [215, 177, 200];
  var nodes = [];

  var amplitudes = this.getAmplitudes(5);
  var leafPictureAmplitudes = amplitudes.slice(0, 2);
  var leafImageAmplitudes = amplitudes.slice(2, amplitudes.length);

  var pictures = ["viptransport", "spots"];
  var images = ["gtl", "paint", "eflats"];

  var imageModals = this.modalFactory.createProjectImageModals();
  var pictureModals = this.modalFactory.createProjectPictureModals();

  var circles = this.createLeafPictureCircles(titles, nodes, leafPictureAmplitudes, pictureModals, pictures);
  var imageCirles = this.createLeafImageCircles(leafImagesTitles, nodes, leafImageAmplitudes, color, imageModals, images);
  var backCircle = this.createBackCircle(backNode);

  circles = circles.concat(imageCirles);
  circles.push(backCircle);
  return circles;
}

CircleFactory.prototype.createEducationCircles = function(backNode){

  var titles = ["Highschool", "Networks & Electronics", "Computer Science", "Software development"];
  var nodes = [];
  var amplitudes = this.getAmplitudes(4);
  var color = [56, 214, 165];

  var modals = this.modalFactory.createEducationModals();
  var images = ["highschool", "electronics", "cs", "software"];

  var circles = this.createLeafImageCircles(titles, nodes, amplitudes, color, modals, images);
  var backCircle = this.createBackCircle(backNode);

  circles.push(backCircle);
  return circles;
}

CircleFactory.prototype.createExperienceCircles = function(backNode){

  var titles = ["Siemencs Healthcare", "Spots IVS", "UCN Next step"];
  var color = [138, 37, 182];
  var nodes = [];
  var amplitudes = this.getAmplitudes(3);

  var pictures = ["siemens", "spots", "nextstep"];
  var pictureModals = this.modalFactory.createExperienceModals();

  var circles = this.createLeafPictureCircles(titles, nodes, amplitudes, pictureModals, pictures);
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

CircleFactory.prototype.createImageCircles = function(titles, childNodes, amplitudes, color, imageKeys){

  var circles = [];
  var amount = titles.length;

  for (var i = 0; i < amount; i++) {

    var image = iconHandler.get(imageKeys[i]);
    var circle = this.createImageCircle(amplitudes[i], titles[i], childNodes[i], image, color);

    circles.push(circle);
  }

  return circles;
}

CircleFactory.prototype.createPictureCircles = function(titles, childNodes, amplitudes, color, imageKeys){

  var circles = [];
  var amount = titles.length;

  for (var i = 0; i < amount; i++) {

    var image = iconHandler.get(imageKeys[i]);
    var circle = this.createPictureCircle(amplitudes[i], titles[i], childNodes[i], image, color);

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

CircleFactory.prototype.createLeafImageCircles = function(titles, childNodes, amplitudes, color, modals, imageKeys){

  var circles = [];
  var amount = titles.length;

  for (var i = 0; i < amount; i++) {

    var image = iconHandler.get(imageKeys[i]);
    var circle = this.createLeafImageCircle(amplitudes[i], titles[i], childNodes[i], image, color, modals[i]);

    circles.push(circle);
  }

  return circles;
}

CircleFactory.prototype.createLeafPictureCircles = function(titles, childNodes, amplitudes, modals, imageKeys){

  var circles = [];
  var amount = titles.length;

  for (var i = 0; i < amount; i++) {

    var image = iconHandler.get(imageKeys[i]);
    var circle = this.createLeafPictureCircle(amplitudes[i], titles[i], childNodes[i], image, modals[i]);

    circles.push(circle);
  }

  return circles;
}

CircleFactory.prototype.createCircle = function(amplitude, title, node, color){

  return new Circle(amplitude, title, node, color);
}

CircleFactory.prototype.createImageCircle = function(amplitude, title, node, image, color){

  return new ImageCircle(amplitude, title, node, image, color);
}

CircleFactory.prototype.createPictureCircle = function(amplitude, title, node, image){

  return new PictureCircle(amplitude, title, node, image);
}

CircleFactory.prototype.createLeafCircle = function(amplitude, title, node, color, modal){

  return new LeafCircle(amplitude, title, node, color, modal);
}

CircleFactory.prototype.createLeafImageCircle = function(amplitude, title, node, image, color, modal){

  return new ImageLeafCircle(amplitude, title, node, image, color, modal);
}

CircleFactory.prototype.createLeafPictureCircle = function(amplitude, title, node, image, modal){

  return new PictureLeafCircle(amplitude, title, node, image, modal);
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
