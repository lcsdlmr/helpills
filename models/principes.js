const mongoose = require('mongoose')

// *********** Construction du Schema **********************

const ActivesIngredientsSchema = mongoose.Schema({
    name: String,                                                       // ex : Paracétamol
    drugsId: [{type: mongoose.Schema.Types.ObjectId, ref: 'drugs'}],    // Liste des médicaments contenant cette substance active
})


// ********* Construction du Model ********************
const ActivesIngredientsModel = mongoose.model('actives', ActivesIngredientsSchema)


// ********** Exports **************************
module.exports = {ActivesIngredientsModel,ActivesIngredientsSchema};