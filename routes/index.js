var express = require('express');
var router = express.Router();
var UserModel = require('../models/bdd/users')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/inscription',async function(req, res){
  console.log('testttttt')
newUser = new UserModel({
  email : req.body.email,
  nom : req.body.nom,
  prenom : req.body.prenom,
  password : req.body.password,
  status : req.body.status,
  plaqueImmat : req.body.plaqueImmat,
  numPharma : req.body.numPharma,
  numDoc : req.body.numDoc,
  antecedent : req.body.antecedent,
  documents: req.body.documents,
  photo: req.body.photo,
  adress: req.body.adress,
  ville: req.body.ville,
  codePostal: req.body.codePostal,
  telephone: req.body.telephone,
  nSecu: req.body.nSecu,
  mutuel: req.body.mutuel,
  idBanque: req.body.idBanque,

})
await newUser.save()
res.json({newUser});
})

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


// router.post('/addFirstName', function (req, res, next) {
//   let firstname = req.body.firstname;
  
//   res.json({ prenom: firstname });
//   });

module.exports = router;
