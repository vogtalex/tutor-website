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

var currHTML = document.getElementById('tutors');
console.log("current html:", currHTML);

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
    if (tutorName.indexOf(filterName) === -1) {
      return false;
    }
  }

  if (filters.minRate) {
    var filterMinRate = parseInt(filters.minRate);
    if (parseInt(preview.hourlyRate) < filterMinRate) {
      return false;
    }
  }

  if (filters.maxRate) {
    var filterMaxRate = parseInt(filters.maxRate);
    if (parseInt(preview.hourlyRate) > filterMaxRate) {
      return false;
    }
  }

  if (filters.city) {
    if (preview.city.toLowerCase() !== filters.city.toLowerCase()) {
      return false;
    }
  }

  if (filters.subject) {
    if (preview.subject.toLowerCase() !== filters.subject.toLowerCase()) {
      return false;
    }
  }

  if (filters.year && filters.year.length > 0) {
    console.log("filters.year:", filters.year);
    console.log("preview.year:", preview.year.toLowerCase());
    if (filters.year.indexOf(preview.year.toLowerCase()) === -1) {
      return false;
    }
  }

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

  console.log("filters.year:", filters.year);

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
    name: currentPreview.getAttribute('data-name').trim(),
    year: currentPreview.getAttribute('data-year').trim(),
    hourlyRate: currentPreview.getAttribute('data-price').trim(),
    city: currentPreview.getAttribute('data-city').trim(),
    subject: currentPreview.getAttribute('data-subject').trim()
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