var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3005;


var tutorData = require('./tutorData.json');
console.log('== tutorData:', tutorData);

app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/homePage', function(req, res, next){
  res.status(200).render('homePage');
});

app.get('/tutorSearch', function(req, res, next) {
  res.status(200).render('tutorSearch', {
    tutors: tutorData
  });
});

app.get('/tutors/:tutor', function(req, res, next) {
  var tutor = req.params.tutor;
  if (tutorData[tutor]) {
    res.status(200).render('profilePage', tutorData[tutor]);
  } else {
    next();
  }

});

app.get('*', function(req, res) {
  res.status(404).render('404',{
    url: req.url
  });
});

app.listen(port, function() {
  console.log('== SERVER listening on PORT: ', port);
});
