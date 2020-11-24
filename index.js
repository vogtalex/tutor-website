var tutorModal = document.getElementById("book-tutor-button");
tutorModal.addEventListener('click', function(){
  console.log("== the modal was clicked");
  document.getElementById('tutor-modal').style.display = "block";
  document.getElementById('tutor-modal-backdrop').style.display = "block";
});
