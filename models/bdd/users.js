var mongoose = require('mongoose');

var banqueSchema = mongoose.Schema({
  cryptograme : String,
  dateValid : String,
  numCarte : String
})


var userSchema = mongoose.Schema({
   email : String,
   nom : String,
   documents : [String],
   prenom : String,
   photo : [String],
   password : String,
   adress : String,
   ville : String,
   codePostal : String,
   telephone : String,
   status : Number,
   nSecu : String,
   mutuel : String,
   admin : Number,
   idBanque : [banqueSchema],
   StatusValide : Boolean,
   DispoDate : Date,
   dispoNow : Boolean,
   plaqueImmat : String,
   numPharma : String,
   numDoc : String,
   antecedent : String
 });
 
 var UserModel = mongoose.model('users', userSchema);
 
 module.exports = UserModel;