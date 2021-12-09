var express = require('express');
var router = express.Router();
var UserModel = require('../models/bdd/users')
var RdvModel = require('../models/bdd/rdv')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/inscription',async function(req, res){
  console.log('*************************************************')
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
    idBanque: {cryptograme : req.body.cryptograme,
               dateValid : req.body.dateValid,
               numCarte : req.body.numCarte},

  })
await newUser.save()
res.json({newUser});
})



router.post('/addrdv',async function(req, res){
  console.log("route add info##########################")
  var patient = await UserModel.findOne({email : req.body.patientId})
  var docteur = await UserModel.findOne({email : req.body.medecinId})
  

  if(patient != null){
    newRdv = new RdvModel({
    date : req.body.date,
    patientId : patient._id,
    medecinId : docteur._id,    
    Photo: req.body.photo,
    description : req.body.description,
    validite : req.body.validite,
    prescription : {number: req.body.number,
                    prise: req.body.prise,
                    duree: req.body.duree,
                    autre: req.body.autre,
                    }

  })}
  await newRdv.save()
  res.json({newRdv});
  })

  router.get('/recepRdv', async function(req,res,next){
    var articles = {}
    var tab = []
    
    var patient = await UserModel.findOne({email : "patientemail1"})
    var docteur = await UserModel.findOne({email : "docemail"})

    if(docteur = null){
    
      var articles = await RdvModel.find({medecinId : docteur._id})
       
      for(var i=0 ; i < articles.length ; i++){
        const test =  articles[i]
        console.log('forrrrrrr',test)
        const test2 = test
        const test3 = await UserModel.findById(test.patientId)
        console.log("testttttttttttttttt", test3.nom)
        const test4 = test3.nom
        const test5 = { nameclient : test4};
        console.log("testtetetetetetete",test4)
        const test6 = Object.assign(test5, test2)
        console.log("finaltesttt",test6)
        console.log("tentative", test5)
        tab.push(test6)
      }
    }else{

      var articles = RdvModel.find({patientId : patient._id})
      for(var i=0 ; i < articles.length ; i++){
        const test =  articles[i]
        console.log('forrrrrrr',test)
        const test2 = test
        const test3 = await UserModel.findById(test.medecinId)
        console.log("testttttttttttttttt", test3.nom)
        const test4 = test3.nom
        const test5 = { name : test4};
        console.log("testtetetetetetete",test4)
        const test6 = Object.assign(test5, test2)
        console.log("finaltesttt",test6)
        console.log("tentative", test5)
        tab.push(test6)
      }
      
    }
  
    res.json({tab})
    
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


// router.post('/addFirstName', function (req, res, next) {
//   let firstname = req.body.firstname;
  
//   res.json({ prenom: firstname });
//   });

module.exports = router;
