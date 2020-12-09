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
function insertTutorPreview(name, imageURL, hourlyRate, city, subject, year) {

  var content = {
    name: name,
    imageURL: imageURL,
    hourlyRate: hourlyRate,
    city: city,
    subject: subject,
    year: year
  };

  var tutorPreview = Handlebars.templates.tutorPreview(content);
  console.log("HTML generated: ", tutorPreview);

  var tutorsSection = document.getElementById('tutors');
  tutorsSection.insertAdjacentHTML('beforeend', tutorPreview);
}

var tutorPreviews = [];
var cities = [];

function previewIsAcceptable(preview, filters) {

  if (filters.name) {
    var tutorName = preview.name.toLowerCase();
    var filterName = filters.name.toLowerCase();
    console.log("failed at name");
    if (tutorName.indexOf(filterName) === -1) {
      return false;
    }
  }

  if (filters.minRate) {
    var filterMinRate = parseInt(filters.minRate);
    console.log("failed at min");
    if (parseInt(preview.hourlyRate) < filterMinRate) {
      return false;
    }
  }

  if (filters.maxRate) {
    var filterMaxRate = parseInt(filters.maxRate);
    console.log("failed at max");
    if (parseInt(preview.hourlyRate) > filterMaxRate) {
      return false;
    }
  }

  if (filters.city) {
    console.log("failed at city");
    if (preview.city.toLowerCase() !== filters.city.toLowerCase()) {
      return false;
    }
  }

  if (filters.year && filters.year.length > 0) {
    console.log("failed at year");
    if (filters.year.indexOf(preview.year) === -1) {
      return false;
    }
  }

  console.log("did not fail")
  return true;

}

function filter() {

  var filters = {
    name: document.getElementById('filter-text').value.trim(),
    minRate: document.getElementById('filter-min-price').value.trim(),
    maxRate: document.getElementById('filter-max-price').value.trim(),
    city: document.getElementById('filter-city').value.trim(),
    subject: document.getElementById('filter-subject').value.trim(),
    year: []
  }

  console.log("name: ", filters.name);
  console.log("minRate: ", filters.minRate);
  console.log("maxRate: ", filters.maxRate);
  console.log("city: ", filters.city);
  console.log("subject: ", filters.subject);
  console.log("year: ", filters.year);

  var yearsChecked = document.getElementsByClassName('filter-year');
  for (var i = 0; i < yearsChecked.length; i++) {
    if (yearsChecked[i].checked == true) {
      filters.year.push(yearsChecked[i].value);
    }
  }

  var previews = document.getElementById('tutors');
  while (previews.lastChild) {
    previews.removeChild(previews.lastChild);
  }

  tutorPreviews.forEach(function (preview) {
    console.log("preview: ", preview);
    if (previewIsAcceptable(preview, filters)) {
      insertTutorPreview(preview.name, preview.imageURL, preview.hourlyRate, preview.city, preview.subject, preview.year);
    }
  });

  console.log("Filter button has been pressed");
}

function saveCurrentPreviews(currentPreview) {
  var preview = {
    name: currentPreview.getAttribute('data-name'),
    year: currentPreview.getAttribute('data-year'),
    hourlyRate: currentPreview.getAttribute('data-price'),
    city: currentPreview.getAttribute('data-city'),
    subject: currentPreview.getAttribute('data-subject')
  }
  var tutorImage = currentPreview.querySelector('.tutor-img-container img');
  preview.imageURL = tutorImage.src;

  return preview;
}

var preloadedPreviews = document.getElementsByClassName('tutor');
for (var i = 0; i < preloadedPreviews.length; i++) {
  tutorPreviews.push(saveCurrentPreviews(preloadedPreviews[i]));
}

var filterUpdateButton = document.getElementById('filter-update-button');
if (filterUpdateButton) {
  filterUpdateButton.addEventListener('click', filter);
}