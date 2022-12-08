const express = require('express')
const router = express.Router()
const { list, add, remove } = require('../controllers/commission.js')

router.get('/' , list)
router.post('/add' , add)
router.post('/remove' , remove)

module.exports = router
