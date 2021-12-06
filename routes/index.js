var express = require('express');
var router = express.Router();
var UserModel = require('../bdd/users')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/users/inscription',async function(req, res){
newUser = new UserModel({
  email : req.body.email,
  nom : req.body.nom,
  prenom : req.body.prenom,
  password : req.body.password,
  status : req.body.status,
  plaqueImmat : req.body.plaqueImmat,
  numPharma : req.body.numPharma,
  numDoc : req.body.numDoc,
  antecedent : req.body.antecedent
})
await newUser.save()

<<<<<<< HEAD
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
=======
res.json({newUser});
})





// router.post('/addFirstName', function(req, res, next) {
//   var firstname = req.body.firstname
//   var twoname = req.body.twoname
//   if(!firstname || !twoname){
//     res.json({ enter: false });
//   }else{
//     res.json({ enter: true })
//   }
//   res.render('index', { title: 'Express' });
// });
>>>>>>> 93d8c513c98333a2d1219c3522c7a558a8fe2c22


// router.post('/addFirstName', function (req, res, next) {
//   let firstname = req.body.firstname;
  
//   res.json({ prenom: firstname });
//   });

module.exports = router;
