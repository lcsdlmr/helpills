var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  
    date : Date,
    patient 
    Medecin
    Photo
    description
    validite
    prescirption. 
            [nom:
            prise:
                dure:
                autre]







 });
 
 var RdvModel = mongoose.model('rdv', userSchema);
 
 module.exports = RdvModel;