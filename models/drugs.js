const mongoose = require('mongoose')

// *********** Import des sous-documents ***********************

var DrugsDetailsData = require('./sous-documents/drugsDetails')

// *********** Construction du Schema **********************

const DrugsSchema = mongoose.Schema({

    drugName: String, // nom du médicament, ex : Doliprane 1000 mg comprimé
    urlToImg: String, // emplacement de l'image
    prescription:Number,
    rating:Object,
    notRecommended:[String],
    drugsDetail: [DrugsDetailsData.DrugsDetailsSchema],

})

// ********* Construction du Model ********************

const DrugsModel = mongoose.model('drugs', DrugsSchema)


// ********** Exports **************************
module.exports = {DrugsModel,DrugsSchema}