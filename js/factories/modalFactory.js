function ModalFactory(){

}

ModalFactory.prototype.createMainModals = function(){

  var modals = [];

  var aboutModal = this.createModal("partialViews/experience-spots2.html");
  modals.push(aboutModal);

  return modals;
}

ModalFactory.prototype.createProjectModals = function(){

  var modals = [];

  var generalModal1 = this.createModal("partialViews/experience-spots.html");
  var generalModal2 = this.createModal("partialViews/experience-spots.html");
  var generalModal3 = this.createModal("partialViews/experience-spots.html");
  var generalModal4 = this.createModal("partialViews/experience-spots.html");
  var generalModal5 = this.createModal("partialViews/experience-spots.html");
  var generalModal6 = this.createModal("partialViews/experience-spots.html");

  modals.push(generalModal1);
  modals.push(generalModal2);
  modals.push(generalModal3);
  modals.push(generalModal4);
  modals.push(generalModal5);
  modals.push(generalModal6);

  return modals;
}

ModalFactory.prototype.createEducationModals = function(){

  var modals = [];

  var generalModal1 = this.createModal("partialViews/experience-spots.html");
  var generalModal2 = this.createModal("partialViews/experience-spots.html");
  var generalModal3 = this.createModal("partialViews/experience-spots.html");
  var generalModal4 = this.createModal("partialViews/experience-spots.html");

  modals.push(generalModal1);
  modals.push(generalModal2);
  modals.push(generalModal3);
  modals.push(generalModal4);


  return modals;
}

ModalFactory.prototype.createExperienceModals = function(){

  var modals = [];

  var generalModal1 = this.createModal("partialViews/experience-siemense.html");
  var generalModal2 = this.createModal("partialViews/experience-spots.html");
  var generalModal3 = this.createModal("partialViews/experience-spots.html");

  modals.push(generalModal1);
  modals.push(generalModal2);
  modals.push(generalModal3);

  return modals;
}

ModalFactory.prototype.createModal = function(url){

  return new Modal(url);
}
