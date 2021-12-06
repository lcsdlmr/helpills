var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/addRDV', function(req, res, next) {
  var firstname = req.body.firstname
  var twoname = req.body.twoname
  if(!firstname || !twoname){
    res.json({ enter: false });
  }else{
    res.json({ enter: true })
  }
  res.render('index', { title: 'Express' });
});


// router.post('/addFirstName', function (req, res, next) {
//   let firstname = req.body.firstname;
  
//   res.json({ prenom: firstname });
//   });

module.exports = router;
