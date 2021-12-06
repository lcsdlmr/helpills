var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
   email : String,
   nom : String,
   documents : [String],
   prenom : String,
   photo : [String],
   password : String,
   adress : String,
   telephone : String,
   status : String,
   nsecu : String,
   mutuel : String,
   admin : Number,
   idBanque : Object,
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