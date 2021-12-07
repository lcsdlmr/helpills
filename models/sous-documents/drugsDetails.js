var mongoose = require('mongoose');

// Ceci est un sous document

// *********** Import des sous-documents ***********************

var MadeWithData = require('./madeWith')

// *********** Construction du Schema **************************

var DrugsDetailsSchema = mongoose.Schema(
    {
        form : String,                              // ex : powder, caps
        madeWith:[MadeWithData.MadeWithSchema]      // sous document
    })

var DrugsDetailsModel = mongoose.model('drugsDetails', DrugsDetailsSchema)

module.exports = {DrugsDetailsModel,DrugsDetailsSchema};