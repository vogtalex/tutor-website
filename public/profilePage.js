function getTutorIdFromURL() {
  var path = window.location.pathname;
  var pathParts = path.split('/');
  if (pathParts[1] === "tutors") {
    return pathParts[2];
  } else {
    return null;
  }
}

function toggleReviewModal() {
  var modalBackdrop = document.getElementById('modal-backdrop');
  var modal = document.getElementById('add-review-modal');

  //modalBackdrop.classList.toggle('hidden');
  modal.classList.toggle('hidden');
}

function reviewModalClear() {
  var rating = document.getElementById('quality-rating-input');
  var reviewerName = document.getElementById('reviewerName-input');
  var reviewText = document.getElementById('review-text-input');


  rating.value = "";
  reviewerName.value = "";
  reviewText.value = "";
}

function reviewModalAccept() {
  console.log("modal accept has been clicked");
  var rating = document.getElementById('quality-rating-input').value.trim();
  var reviewerName = document.getElementById('reviewerName-input').value.trim();
  var reviewText = document.getElementById('review-text-input').value.trim();

  if (rating == "" || reviewerName == "" || reviewText == "") {
    alert("All fields must be filled in");
  }

  else {
    var reviewRequest = new XMLHttpRequest();
    var reqURL = '/tutors/' + getTutorIdFromURL() + '/addReview';
    console.log("req.url:", reqURL);
    reviewRequest.open('POST', reqURL);

    var reqbody = JSON.stringify({
      rating: rating,
      reviewerName: reviewerName,
      reviewText: reviewText
    });

    reviewRequest.setRequestHeader('Content-Type', 'application/json');
    reviewRequest.addEventListener('load', function (event) {
      console.log("event target status:", event.target.status);
      if (event.target.status === 200) {
        var content = {
          rating: rating,
          reviewerName: reviewerName,
          reviewText: reviewText
        }
        var tutorReviewTemplate = Handlebars.templates.tutorReview(content);
        console.log("New tutor review html", newTutorReviewHTML);
        var reviewsSection = document.getElementById('reviews');
        reviewsSection.insertAdjacentHTML('beforeend', newTutorReviewHTML);
      }
      else {
        alert("Error adding tutor review to database:" + event.target.response);
      }
    });
    reviewRequest.send(reqbody);
    toggleReviewModal();
  }
}


var createReviewButton = document.getElementById('add-review-button');
createReviewButton.addEventListener('click', toggleReviewModal);

var reviewCloseButton = document.getElementById('review-modal-close');
reviewCloseButton.addEventListener('click', toggleReviewModal);

var reviewClearButton = document.getElementById('review-modal-clear');
reviewClearButton.addEventListener('click', reviewModalClear);

var reviewAcceptButton = document.getElementById('review-modal-accept');
reviewAcceptButton.addEventListener('click', reviewModalAccept);
