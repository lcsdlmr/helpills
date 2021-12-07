var mongoose = require('mongoose');

// Ceci est un sous document

var MadeWithSchema = mongoose.Schema(
    {
        activeIngredient: {type: mongoose.Schema.Types.ObjectId, ref: 'drugs'},
        name:String,
        dosage : Number,
        unit: String,
    })

var MadeWithModel = mongoose.model('madeWith', MadeWithSchema)

module.exports = {MadeWithModel,MadeWithSchema};