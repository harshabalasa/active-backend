const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    mobile : String,
    password : String,
    commission : [{
        id:String,
        name:String,
    }]
})

const User = new mongoose.model('User', userSchema);

module.exports = User;
