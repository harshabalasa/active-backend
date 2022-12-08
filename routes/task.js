const express = require('express')
const router = express.Router()
const { add , pendingList , completedList , remove , update } = require('../controllers/task.js')

router.post('/pendingList' , pendingList)
router.post('/completedList' , completedList)
router.post('/add' , add)
router.post('/update' , update)
router.post('/remove' , remove)

module.exports = router