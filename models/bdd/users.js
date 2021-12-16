var mongoose = require('mongoose');




var userSchema = mongoose.Schema({
   email : String,
   nom : String,
   documents : Array,
   prenom : String,
   photo : Array,
   password : String,
   adress : Object,
   telephone : String,
   status : Number,
   nSecu : String,
   mutuel : Object,
   admin : Number,
   idBanque : Object,
   StatusValide : Boolean,
   DispoDate : Array,
   copyDispoDate : Array,
   dispoNow : Boolean,
   plaqueImmat : String,
   SIREN : String,
   antecedent : Array,
   token : String

 });
 
 var UserModel = mongoose.model('users', userSchema);
 
 module.exports = UserModel;