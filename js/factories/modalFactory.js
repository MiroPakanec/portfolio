function ModalFactory(){

}

ModalFactory.prototype.createMainModals = function(){

  var modals = {};

  var aboutModal = this.createModal("partialViews/main-about.html");
  var contactModal = this.createModal("partialViews/main-contact.html");
  modals["about"] = aboutModal;
  modals["contact"] = contactModal;

  return modals;
}

ModalFactory.prototype.createProjectPictureModals = function(){

  var modals = [];

  var generalModal1 = this.createModal("partialViews/project-vipTransport.html");
  var generalModal2 = this.createModal("partialViews/project-spots.html");

  modals.push(generalModal1);
  modals.push(generalModal2);

  return modals;
}

ModalFactory.prototype.createProjectImageModals = function(){

  var modals = [];

  var generalModal1 = this.createModal("partialViews/project-gtl.html");
  var generalModal2 = this.createModal("partialViews/project-paint.html");
  var generalModal3 = this.createModal("partialViews/project-eflats.html");

  modals.push(generalModal1);
  modals.push(generalModal2);
  modals.push(generalModal3);

  return modals;
}

ModalFactory.prototype.createEducationModals = function(){

  var modals = [];

  var generalModal1 = this.createModal("partialViews/education-highschool.html");
  var generalModal2 = this.createModal("partialViews/education-electronics.html");
  var generalModal3 = this.createModal("partialViews/education-cs.html");
  var generalModal4 = this.createModal("partialViews/education-sd.html");

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
  var generalModal3 = this.createModal("partialViews/experience-nextstep.html");

  modals.push(generalModal1, generalModal2, generalModal3);

  return modals;
}

ModalFactory.prototype.createModal = function(url){

  return new Modal(url);
}
