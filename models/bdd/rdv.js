var mongoose = require('mongoose');

var prescriptionSchema = mongoose.Schema({
    number: String,
    prise: String,
    duree: Number,
    autre: String,
})



var userSchema = mongoose.Schema({
date : Date,
patientId : {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
medecinId: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
Photo: String,
descritpion : String,
validite : String,
prescription : [prescriptionSchema]
 });
 
 var RdvModel = mongoose.model('rdv', userSchema);
 
 module.exports = RdvModel;