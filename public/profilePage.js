function toggleModal() {
  var modalBackdrop = document.getElementById('modal-backdrop');
  var modal = document.getElementById('add-review-modal');

  modalBackdrop.classList.toggle('hidden');
  modal.classList.toggle('hidden');
}

function modalClear() {
  var rating = document.getElementById('quality-rating-input');
  var reviewerName = document.getElementById('reviewerName-input');
  var reviewText = document.getElementById('review-text-input');


  rating.value = "";
  reviewerName.value = "";
  reviewText.value = "";
}

function modalAccept() {
  console.log("modal accept has been clicked");
  var rating = document.getElementById('quality-rating-input').value.trim();
  var reviewerName = document.getElementById('reviewerName-input').value.trim();
  var reviewText = document.getElementById('review-text-input').value.trim();

  if (rating == "" || reviewerName == "" || reviewText == "") {
    alert("All fields must be filled in");
  }

  else {
    var reviewRequest = new XMLHttpRequest();
    var reqURL = '/tutors/' + name;
    console.log("req.url:", reqURL);
    reviewRequest.open('POST', reqURL);

    var reqBody = JSON.stringify({
      rating: rating,
      reviewerName: reviewerName,
      reviewText: reviewText
    });

    reviewRequest.setRequestHeader('Content-Type', 'application/json');
    reviewRequest.addEventListener('load', function (event) {
      if (event.target.status === 200) {
        var tutorReviewTemplate = Handlebars.templates.tutorReview;
        var newTutorReviewHTML = tutorReviewTemplate({
          rating: rating,
          reviewerName: reviewerName,
          reviewText: reviewText
        });
        var reviewsSection = document.getElementById('reviews');
        reviewsSection.insertAdjacentHTML('beforeend', newTutorReviewHTML);
      }
      else {
        alert("Error adding tutor review to database:" + event.target.response);
      }
    });
    reviewRequest.send(reqBody);
    toggleModal();
  }
}


var createReviewButton = document.getElementById('add-review-button');
createReviewButton.addEventListener('click', toggleModal);

var modalCloseButton = document.getElementById('modal-close');
modalCloseButton.addEventListener('click', toggleModal);

var modalClearButton = document.getElementById('modal-clear');
modalClearButton.addEventListener('click', modalClear);

var modalAcceptButton = document.getElementById('modal-accept');
modalAcceptButton.addEventListener('click', modalAccept);
