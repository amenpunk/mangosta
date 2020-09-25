const express = require("express")
const router = express.Router();
const {find, insert, update } = require("../Controller/User")

router.post('/insert', insert) 
router.get('/find/:key/:value', find)
router.post('/update', update)

module.exports.router = router


