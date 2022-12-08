const mongoose = require('mongoose')

const officerSchema = new mongoose.Schema({
    officerId : String,
    officerName : String,
    mobile : String,
    email : String,
    cadreId : String
})

const Officer = new mongoose.model('Officer' , officerSchema)

module.exports = Officer
