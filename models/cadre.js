const mongoose = require('mongoose')

const cadreSchema = new mongoose.Schema({
    cadreName : String
})

const Cadre = new mongoose.model('Cadre' , cadreSchema)

module.exports = Cadre
