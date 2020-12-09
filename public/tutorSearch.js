/*
var tutorModal = document.getElementById("book-tutor-button");
var modalBackdrop = document.getElementById('tutor-modal-backdrop');
var modal = document.getElementById('tutor-modal');

tutorModal.addEventListener('click', function(){
  console.log("== the modal was clicked");
  modalBackdrop.classList.toggle('hidden');
  modal.classList.toggle('hidden');
});

var tutorCloseButton = document.getElementById("modal-close");

tutorCloseButton.addEventListener('click', function() {
    console.log("x button was clicked");
    modalBackdrop.classList.toggle('hidden');
    modal.classList.toggle('hidden');
});
*/
/*
var tutorLink = document.getElementById("book-tutor-button");
  tutorLink.addEventListener('click', function(){
    console.log("== the tutorLink was clicked");
    window.location.href = "/tutors/codybanks";
});
*/
function insertTutorPreview(name, imageURL, hourlyRate) {

  var content = {
    name: name,
    imageURL: imageURL,
    hourlyRate: hourlyRate,
  };

  var tutorPreview = Handlebars.templates.post(content);

  var tutorsSection = document.getElementById('tutors');
  tutorsSection.insertAdjacentHTML('beforeend', tutorPreview);
}
