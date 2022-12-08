const express = require('express')
const router = express.Router()
const { validateUser , validateAdmin } = require('../controllers/login.js')

router.post('/user', validateUser)
router.post('/admin' , validateAdmin)

module.exports = router
