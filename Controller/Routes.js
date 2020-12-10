import express from 'express'
const router = express.Router();
const {find, insert, update, getBlogs } = require("./User")
const { Insert} = require('./Blog')

router.post('/insert', insert) 
router.get('/find/:key/:value', find)
router.post('/update', update)
router.post('/getBlogs', getBlogs)

router.post('/blog/create', Insert)


module.exports.router = router


