const express = require('express')
const router = express.Router()
const { list, add } = require('../controllers/commission.js')

router.get('/' , list)
router.post('/add' , add)

module.exports = router
