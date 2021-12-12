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
  
  var compteExistant = await UserModel.findOne({ email: req.body.email });
  if(compteExistant === null){
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
var userSave = await newUser.save()
console.log(userSave)
res.json({isok:true, userSave:userSave})
}else{
  res.json({isok:false})
  console.log("€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€")
}

})


router.post('/connection', async function(req, res){
console.log(req.body.email , req.body.password, "*************************************************************")
  var userConnect = await UserModel.findOne({email : req.body.email } );
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", userConnect)
 if(userConnect.password == req.body.password){
  res.json({isok:true}) 
 }else{
  res.json({isok:false})
 }
 console.log("************************************************************************************************",isok)


})


router.post('/addrdv',async function(req, res){
  console.log("route add info##########################")
  var patient = await UserModel.findOne({email : req.body.patientId})
  var docteur = await UserModel.findOne({email : req.body.medecinId})
  

  if(patient != null){
    newRdv1 = new RdvModel({
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
  var newRdv = await newRdv1.save()
  res.json({newRdv});
  })

  router.post('/recepRdv', async function(req,res,next){
    var articles = {}
    var tab = []
    
    var patient = await UserModel.findOne({email : req.body.email})
    var docteur = await UserModel.findOne({email : req.body.email})


    if(docteur = null){
    
      var articles = await RdvModel.find({medecinId : docteur._id})
       
      for(var i=0 ; i < articles.length ; i++){
        const test =  articles[i]
        console.log('forrrrrrr',test)
        const test2 = test
        const test3 = await UserModel.findById(test.patientId)
        console.log("testttttttttttttttt", test3.nom)
        const test4 = test3.nom
        const test5 = { name : test4};
        console.log("testtetetetetetete",test4)
        const test6 = Object.assign(test5, test2)
        console.log("finaltesttt",test6)
        console.log("tentative", test5)
        tab.push(test6)
      }
    }else{

      var articles = await RdvModel.find({patientId : patient._id})

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

  router.get('/searchdoc',async function(req, res){
    
    
    var docteur = await UserModel.find({status : 4})
    
  
    
    
    res.json({docteur});
    })

    router.post('/searchuser',async function(req, res){
      
      
      var users = await UserModel.findOne({email : req.body.email})
      
    
      
      
      res.json({users});
      })


      router.post('/addprescription',async function(req, res){
        console.log("route add info##########################")
        
        var prescription = await RdvModel.updateOne({ _id : req.body.id},{$push:{
          number: req.body.number,
          prise: req.body.prise,
          duree: req.body.duree,
          autre: req.body.autre,}})
        
          console.log(prescription)
        
        
        res.json({prescription});
        })







  const nbreAleatoire = (min,max)=>{
    return Math.floor(Math.random() * (max+1 - min) + min);
  }

  const chainenNmbreAleatoire =(nbre)=>{
    var chaine = ""
    for (var i=0;i<nbre;i++){
     chaine += nbreAleatoire(0,9)
    }
    return chaine
  }

  const carteBleue =()=>{
    var CB ={}
    Object.assign(CB,{numero : chainenNmbreAleatoire(16)})
    var date=''
    var date = date+ nbreAleatoire(1,12) + '/'+ nbreAleatoire(1,30)
    Object.assign(CB,{date : date})
    var crypto = chainenNmbreAleatoire(3)
    Object.assign(CB,{crypto : crypto})
    return CB
  }

  const carteVitale =()=>{
    var CV =''
    CV += nbreAleatoire(1,2) //genre
    CV += nbreAleatoire(0,99) // année naissance
   var mois = nbreAleatoire(0,1) // mois de naissance
   
    if(mois === 0){
      console.log('je suis la')
      var mois2 = nbreAleatoire(1,9) // mois de naissance
    }else{
      var mois2 = nbreAleatoire(0,2)
    }
    CV += ""+mois+mois2
    CV += nbreAleatoire(1,95) // departement
    CV += chainenNmbreAleatoire(8)
    return CV
  }


  const lettresAleatoire =(nbre)=>{
    var chaine = ""
    for (var i=0;i<nbre;i++){
     chaine += String.fromCharCode(nbreAleatoire(97,122))
    }
    return chaine
  }

  const emailAleatoire = (prenom,nom)=>{
    var chaine = ""
    if(nom && prenom){
      chaine += prenom+"."+nom+chainenNmbreAleatoire(2)+'@gmail.com'
    }else{
    chaine += lettresAleatoire(nbreAleatoire(5,10)) +'@gmail.com'
    }
    return chaine
  }
  const passwordAleatoire =(nbre) =>{
    var chaine =''
    var nmbreLettre = nbreAleatoire(1,nbre-1)
    chaine += lettresAleatoire(nmbreLettre)
    chaine += chainenNmbreAleatoire(nbre-nmbreLettre)
    return chaine
  }

    const nomUserAleatoire = ()=>{
      const prenom = ["jean","albert","herve","xavier","josé","hippolite","némo","estelle","julie","babeth","brigitte","emmanuel","cléa","corinne","élena","kimberley","Savannah"]
      const nom = ["blanc","moulin","dupont-de-ligonnes","latruelle","pipe","molette","zhipacoul","achternoen","groisard","biebuyck"]
      var userName ={}
        Object.assign(userName,{prenom : prenom[nbreAleatoire(0,prenom.length-1)]})
        Object.assign(userName,{nom : nom[nbreAleatoire(0,nom.length-1)]})
        return userName
    }
    
    const adressAleatoire= ()=>{
      var adresse = {}
       var numero = chainenNmbreAleatoire(nbreAleatoire(2,3))
       const typeLieux = ["rue ","avenue ","chemin ","impasse ","lieu-dit "]
       const nomRue = ["Victor Hugo","du Paradis","Jean Moulin","Vacon"," imperiale de Star Wars"]
       const ville = ["Sarrians","Dunkerque","Coudekerque-Branche","Carpentras","Loriol-du-Comtat","Perne-les-fontaines","Illkirch-Graffenstaden","Vaison-la-Romaine","Hazebrouck","Courthezon","Volckerinckhove"]
       var codepAleatoire = chainenNmbreAleatoire(5)
       Object.assign(adresse,{numero : numero})
       Object.assign(adresse,{typeLieux : typeLieux[nbreAleatoire(0,typeLieux.length-1)]})
       Object.assign(adresse,{nomRue : nomRue[nbreAleatoire(0,nomRue.length-1)]})
       Object.assign(adresse,{ville : ville[nbreAleatoire(0,ville.length-1)]})
       Object.assign(adresse,{codepAleatoire : codepAleatoire})
       return adresse
    }

    const telAleatoire= ()=>{
      var numTel = ''
      numTel += '0'+nbreAleatoire(6,7)+chainenNmbreAleatoire(8)
      return numTel
    }

    const mutuel2 =()=>{
      const nomMutuelle = ["SwissLife","Macif","Maif","MMA","GMF","Groupama"]
      var numContrat = chainenNmbreAleatoire(8)
      var mutuelle = {}
      Object.assign(mutuelle,{nomMutuelle : nomMutuelle[nbreAleatoire(0,nomMutuelle.length-1)]})
       Object.assign(mutuelle,{numContrat : numContrat})
       return mutuelle
    }
    const matricule =()=>{
      var matricule = ''
      matricule += lettresAleatoire(2)+'-'+chainenNmbreAleatoire(3)+'-'+lettresAleatoire(2)
      return matricule
    }

    const anteMed =()=>{
      const nomMaladie = ["VIH","fiévre jaune","paludisme","cancer","lèpres","charcot","lyme","crohn","rage","peste noire","alcoolisme","covid","variole","tuberculose","cardiopathie ischémique","AVC","diabète","alzheimer"]
      var antecedent = []
      if(nbreAleatoire(1,1) === 1){
        var nombre = nbreAleatoire(1,3)
        for (var i=0; i<nombre-1; i++){
            var maladie = nomMaladie[nbreAleatoire(0,nomMaladie.length-1)]
            if(!antecedent.includes(maladie)){
            antecedent.push(maladie)}              
        }
      }
              return antecedent

    }



    const creerCreneaux = ()=>{
      var heure = ''
      var heureNumber = 0
      var minutes = ''
      var minNumber = 0

      if(nbreAleatoire(0,1) == 0){
        minutes='00'
      }else{
        minutes='30'
        minNumber = 0.5
      }
      var a = nbreAleatoire(0,1)
      var b = ''

      if(a==0){
      b=nbreAleatoire(0,9)
      heureNumber = b
      }else{
        b=nbreAleatoire(0,5)
        heureNumber = 10+b
      }
      heure += ""+a+b+':'+minutes
      heureNumber += minNumber
      return {string:heure, number:heureNumber}
    }

    const conversionDate=(number)=>{
      var string = ""
      if(Math.floor(number)!=number){
        if(number<10){
          string="0"+Math.floor(number) +":30"
        }else{
          string=Math.floor(number)+":30"
        }
      }else{
        if(number<10){
          string="0"+Math.floor(number) +":00"
        }else{
          string=Math.floor(number)+":00"
        }
      }
      return string
    }


    const creneaux = (heureDebut) =>{
      console.log("heureDebut", heureDebut)
      var heureDeFin = nbreAleatoire(Math.floor(heureDebut+1),23)
      const heure =[]
      if(Math.floor(heureDebut)!=heureDebut){
        for(var i=0;i<((heureDeFin-Math.floor(heureDebut))*2);i++){
          heure.push(conversionDate(heureDebut+(i/2)))
        }
      }else{
        for(var i=0;i<((heureDeFin+0.5-Math.floor(heureDebut))*2);i++){
         heure.push(conversionDate(heureDebut+(i/2)))
        }}
      return heure
    }

    const isAvailableAleatoire= () =>{
      const jour = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]
      var objectDispo = []
      var dispo = []
      var nombre = nbreAleatoire(0,5)
      for (var i=0; i<nombre-1; i++){
          var jourAleatoire = jour[nbreAleatoire(0,jour.length-1)]
          if(!dispo.includes(jourAleatoire)){
          dispo.push(jourAleatoire)}              
      }
      for(var i2=0; i2<dispo.length;i2++){
        objectDispo.push({date:dispo[i2],creneaux:creneaux(creerCreneaux().number)})
      }
      return objectDispo
    }
  
  console.log("aaaaa",isAvailableAleatoire())    

const creerUser = async (status1)=>{
  if(status1){
    if(status1 == 1){
      var status = 4
    }else if(status1 == 4){
      var status = 1
    }else{
      var status = 1
    }
  }else{
    var status = nbreAleatoire(1,4)
  }
    var username = nomUserAleatoire()
    var prenom = username.prenom
    var nom = username.nom
    var email = emailAleatoire(prenom,nom)
    var password = passwordAleatoire(nbreAleatoire(5,8))
    var adresse = adressAleatoire()
    var telephone = telAleatoire()
    var status = nbreAleatoire(1,4)
    if(status == 1){ // patient
      var nSecu = carteVitale()
      var mutuelle = mutuel2()
      var idBanque = carteBleue()
      var antecedent = anteMed()
    } else{ // autre
      if(nbreAleatoire(0,1)== 1){
        var StatusValide = true
        
      }else{
        var StatusValide = false
      }
      
      if (status ==2){
        var plaqueImmat = matricule()
      }

      
      var SIREN = chainenNmbreAleatoire(14)
    }
    if(nbreAleatoire(0,5)>0){
     var admin = 0
    }else{
      var admin = 1
    }


var dispoDate = isAvailableAleatoire()
   


    
    newUser = new UserModel({

      email : email,
      nom : nom,
      prenom : prenom,
      password : password,
      status : status,
      plaqueImmat : plaqueImmat,
      SIREN : SIREN,
      antecedent : antecedent,
      adress: adresse,
      telephone: telephone,
      nSecu: nSecu,
      mutuel: mutuelle,
      idBanque: idBanque,
      admin:admin,
      DispoDate:dispoDate,
      copyDispoDate:dispoDate
    })
  var userSave = await newUser.save() 
      console.log(userSave)      
    }


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


  router.get('/seeder-user', function(req, res, next){
    console.log('je suis dans seeder-user')
    for (var i=0;i<5;i++){
     var a = creerUser()
     console.log("*******************************************************************************",i)
     console.log("*******************************************************************************",a.nom,a.prenom)
    }
    // do{
    // creerUser()
    //  }
    // while(creerUser().prenom !=="estelle" && creerUser().nom !=="groisard")
    res.json({ok:"ok2"});
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
