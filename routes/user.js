const express = require('express');
const router = express.Router();
const { list, add, update, remove } = require('../controllers/user.js');

router.get('/' , list)
router.post('/add' , add)
router.post('/update', update)
router.post('/remove' , remove)



module.exports = router;

