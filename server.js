var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

var cookieParser = require('cookie-parser');
const session = require('express-session')
// const RedisStore = require('connect-redis')(session)
var port = process.env.PORT || 8121;



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'WJiol#23123_',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}))

var tutorData = require('./tutorData');
//var tutorData = require('./tutorData.json');
//console.log('== tutorData:', tutorData);
var userData = require('./userData')

app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static('public'));

app.get('/homePage', function(req, res, next){
  res.status(200).render('homePage');
});

app.get('/login', function(req, res, next) {
  res.status(200).render('login', {userData})
})

app.get('/api/userdata', function(req, res, next) {
  res.status(200).json(userData)
})


app.post('/test', function(req, res) {
  console.log(req.body);
  res.json(req.body)
})

app.post('/api/login', function(req, res, next) {
    const { username, password } = req.body
    let t = userData.some(val => {
      return username == val.username && password == val.password
    })
    console.log(t);
    if (t) {
      req.session.username = username
      res.json({errno: 0})
      return
    }
    res.json({errno: -1})

})

app.get('/tutorSearch', async function(req, res, next) {
  console.log('tutorsession', req.session.username);
  if(req.session.username) {
    res.status(200).render('tutorSearch', {tutorData});
    return
  } else {
    res.status(200).render('login');
  }
});

app.post('/tutorSearch/:tutor/addTutor', function (req, res, next) {
  console.log("req.body:", req.body);
  if (req.body) {
    tutorData.push({
      name: req.body.name,
      imageURL: req.body.imageURL,
      hourlyRate: req.body.hourlyRate,
      city: req.body.city,
      subject: req.body.subject,
      year: req.body.year,
      zoomURL: req.body.zoomURL,
      experience: req.body.experience,
      email: req.body.email,
      reviewData: req.body.reviewData
    });
    console.log("Data in JSON:", tutorData);

    fs.writeFile(
      __dirname + '/tutorData.json',
      JSON.stringify(tutorData, null, 2),
      function (err, data) {
        if (err) {
          console.log(" -- err:", err);
          res.status(500).send("Error saving tutor profile in database");
        }
        else {
          res.status(200).send("Tutor profile successfully added");
        }
      }
    );
  }
  else {
    res.status(400).send("Request body must contain all desired fields");
  }
});

app.post('/tutors/:tutor/addReview', function (req, res, next) {
  console.log("req.body:", req.body);
  var tutor = req.params.tutor;
  if (req.body) {
    for (var i = 0; i < tutorData.length; i++)
    {
      if (tutorData[i].name == tutor) {
        tutorData[i].reviewData.push({
          rating: req.body.rating,
          reviewerName: req.body.reviewerName,
          reviewText: req.body.reviewText
        });
      }
    }
      console.log("== Data for", tutor, ":", tutorData[i]);

      fs.writeFile(
        __dirname + '/tutorData.json',
        JSON.stringify(tutorData, null, 2),
        function (err, data) {
          if (err) {
            console.log(" -- err:", err);
            res.status(500).send("Error saving tutor profile in database");
          }
          else {
            res.status(200).send("Tutor profile successfully added");
          }
        }
      );
    }
    else {
      res.status(400).send("Request body must contain all desired fields");
    }
});

app.get('/tutors/:tutor', function(req, res, next) {
  var tutor = req.params.tutor;
  console.log("param:", tutor);
  for (var i = 0; i < tutorData.length; i++)
  {
    if (tutorData[i].name == tutor) {
      res.status(200).render('profilePage', tutorData[i]);
    }
  }
});

//app.get('/about')

app.get('*', function(req, res) {
  res.status(404).render('404',{
    url: req.url
  });
});

app.listen(port, function() {
  console.log('== SERVER listening on PORT: ', port);
});
