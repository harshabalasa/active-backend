const express = require('express')
const router = express.Router()
const { list , add } = require('../controllers/cadre.js')

router.get('/' , list)
router.post('/add' , add)

module.exports = router
