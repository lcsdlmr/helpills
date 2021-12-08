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

    if(docteur != null){
    
      var articles = await RdvModel.find({medecinId : docteur._id})
       
      for(var i=0 ; i < articles.length ; i++){
        var test =  articles[i]
        console.log('forrrrrrr',test)
        var test3 = await UserModel.findById(test.patientId)
        console.log("testttttttttttttttt", test3.nom)
        var test4 = { nameclient : 4}
        console.log("testtetetetetetete",test4)
        var test5 = Object.assign(test,test4)
        console.log("finaltesttt",test5)
        console.log("tentative", test)

      }










      // console.log("test 1 info######################################################################################################################################")
      // console.log("pour info",articles)     
      // console.log("test",articles)


      // const miseEnFormeDate = (async (event, i) => {
      //   console.log("console.logd eevent",event)
      //   var name = await UserModel.findById("61b0bf3e5dffa0cc7a242bcf")
      //   Object.assign(articles, name)
        
        
      
     
      
      // var tab = articles.map((event, i) => (miseEnFormeDate(event, i)))
      // console.log('testttttttttttttttt',tab)
    }else{

      var articles = RdvModel.find({patientId : patient._id})
      
      
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
