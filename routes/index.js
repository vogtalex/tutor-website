var express = require('express');
var router = express.Router();
var multiparty = require("multiparty");
var images = require("images");
var fs = require('fs');

var note = require('../model/note');

/* GET home page. */
router.get('/', function(req, res, next) {
  note.find().then(result => {
    console.log(result);
    res.render('index');
  })
});
router.get('/index', function(req, res, next) {
    res.render('index');
});
router.get('/tutors', function(req, res, next) {
    note.find().then(result => {
      console.log(result);
      res.render('tutors', {result});
    })
});


router.get('/form', function(req, res, next) {
    res.render('form');
});

router.post('/add', function(req, res, next) {
  var form = new multiparty.Form();
    form.parse(req, function(err, fields, files){
      if(files.imgFile != undefined){
        console.log(files.imgFile[0]);
        console.log(files.imgFile[0].path);
  
        var aI = parseInt(Math.random()*100000000);
        let url = `images/${aI}.jpg`;
  
        // save image
        images(files.imgFile[0].path)
          .size(400)
          .save(`public/${url}`, {               //Save the image to a file, with the quality of 50
            quality : 50
        });
  
        note.create({
          tutor: String(fields.tutor),
          major: String(fields.major),
          body: String(fields.info),
          grade: String(fields.grade),
          imgSrc: url
        }).then(result => {
          res.send({
            status: '200',
            data: result
          })
        })
      }
    })
});

module.exports = router;
