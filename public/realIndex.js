var tutorFinderButton = document.getElementById("tutor-finder-button")
var signInButton = document.getElementById("sign-in-button")

tutorFinderButton.addEventListener('click', function(){
  console.log("== Tutor finder was clicked");
  window.location.href = 'tutors';
});

signInButton.addEventListener('click', function(){
  console.log("== Sign in was clicked");
  window.location.href = 'tutors';
});


