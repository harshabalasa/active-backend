const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    id1: String,
    id2: String,
    commissionId: String,
    commissionName: String,
    officer: [{
        officerId: String,
        officerName: String,
        mobile: String,
        email: String,
        cadreId: String,
        status: Number
    }],
    due: String,
    assigned: String,
    status: Number
})

const Task = new mongoose.model('Task', taskSchema)

module.exports = Task