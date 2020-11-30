<<<<<<< HEAD
var tutorModal = document.getElementById("book-tutor-button");
tutorModal.addEventListener('click', function(){
  console.log("== the modal was clicked");
  document.getElementById('tutor-modal').style.display = "block";
  document.getElementById('tutor-modal-backdrop').style.display = "block";
});
=======
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
>>>>>>> origin/master
