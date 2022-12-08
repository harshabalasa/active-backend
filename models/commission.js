const mongoose = require('mongoose')

const commissionSchema = new mongoose.Schema({
    commissionName : String
})


const Commission = new mongoose.model('Commission' , commissionSchema)

module.exports = Commission
