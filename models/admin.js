const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    mobile : String,
    password : String
})

const Admin = new mongoose.model('Admin' , adminSchema)

module.exports = Admin 
